import { Client } from 'ts-postgres'
import { getPairPool, getPoolDayData, getPoolTicks, getToken } from './graph'

const TOKENS = ['ETH', 'USDC']

async function main() {
  const client = new Client({ user: 'determinal', password: 'determinal', database: 'determinal' })
  await client.connect()

  await client.query(`
  create table if not exists tokens(
    address text primary key,
    symbol text,
    name text,
    decimals int
  );
`)

  await client.query(`
  create table if not exists pools(
    address text,
    token0 text,
    token1 text,
    token0Price text,
    token1Price text,
    liquidity text,
    tick text,
    primary key (address)
  );
`)

  await client.query(`
  create table if not exists ticks(
    pool_address text,
    tick_idx text,
    liquidity text,
    price0 text,
    price1 text,
    primary key (pool_address, tick_idx)
  );
`)

  await client.query(`
  create table if not exists pool_day_datas(
    pool_address text,
    price0 text,
    price1 text,
    volume_usd text,
    date timestamp,
    primary key (pool_address, date)
  );
`)

  await client.query(`
  delete from tokens;
`)
  await client.query(`
  delete from pools;
`)
  await client.query(`
  delete from ticks;
`)
  await client.query(`
  delete from pool_day_datas;
`)

  const symbolToAddr: Record<string, string> = {}
  for (let symbol of TOKENS) {
    const token = await getToken(symbol)
    console.log(token)
    await client.query(
      `
      insert into tokens(address, symbol, name, decimals) values($1, $2, $3, $4);
    `,
      [token.id, token.symbol, token.name, +token.decimals]
    )

    symbolToAddr[symbol] = token.id
  }

  let i = 0
  for (let symbol0 of TOKENS) {
    for (let symbol1 of TOKENS.slice(i + 1)) {
      if (symbol0 == symbol1) {
        continue
      }

      const pool = await getPairPool(symbolToAddr[symbol0], symbolToAddr[symbol1], '500')
      if (!pool) {
        console.log('No pool for pair', symbol0, symbol1)
        continue
      }

      await client.query(
        `
        insert into pools(address, token0, token1, token0Price, token1Price, liquidity, tick) values($1, $2, $3, $4, $5, $6, $7)
      `,
        [
          pool.id,
          pool.token0.id,
          pool.token1.id,
          pool.token0Price,
          pool.token1Price,
          pool.liquidity,
          pool.tick,
        ]
      )

      const ticks = await getPoolTicks(pool.id)
      for (let tick of ticks) {
        console.log(tick)
        await client.query(
          `
          insert into ticks(pool_address, tick_idx, liquidity, price0, price1) values ($1, $2, $3, $4, $5)
        `,
          [pool.id, tick.tickIdx, tick.liquidityNet, tick.price0, tick.price1]
        )
      }

      const poolDayDatas = await getPoolDayData(pool.id)
      for (let day of poolDayDatas) {
        console.log(day)
        const date = new Date(day.date * 1000)
        await client.query(
          `
          insert into pool_day_datas(pool_address, price0, price1, volume_usd, date) values ($1, $2, $3, $4, $5)
        `,
          [pool.id, day.token0Price, day.token1Price, day.volumeUSD, date]
        )
      }
    }

    i += 1
  }
}

main()
  .then(() => process.exit(0))
  .catch(console.error)
