import { createClient, Pool } from './generated'

export const client = createClient({
  url: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
})

export async function getToken(symbol: string) {
  const finalSymbol = symbol === 'ETH' ? 'WETH' : symbol
  const { tokens } = await client.query({
    tokens: {
      __args: {
        where: {
          symbol: finalSymbol,
        },
        orderBy: 'volumeUSD',
        orderDirection: 'desc',
        subgraphError: 'allow',
      },
      id: true,
      name: true,
      symbol: true,
      decimals: true,
    },
  })

  return tokens[0]
}

export async function getPairPool(
  tokenX: string,
  tokenY: string,
  feeTier: string
): Promise<Pool | undefined> {
  const [token0, token1] = sortTokens(tokenX, tokenY)
  const { pools } = await client.query({
    pools: {
      __args: {
        subgraphError: 'allow',
        where: {
          feeTier,
          token0,
          token1,
        },
      },
      id: true,
      tick: true,
      sqrtPrice: true,
      feeTier: true,
      liquidity: true,
      token0Price: true,
      token1Price: true,
      token0: {
        id: true,
      },
      token1: {
        id: true,
      },
    },
  })

  let pool = undefined
  for (let p of pools) {
    if (pool === undefined) {
      pool = p
    } else if (+p.liquidity > +pool.liquidity) {
      pool = p
    }
  }
  return pool as Pool
}

export async function getPoolTicks(pool: string) {
  let page = 0
  let result = []
  while (true) {
    const { ticks } = await client.query({
      ticks: {
        __args: {
          subgraphError: 'allow',
          first: 1000,
          skip: page * 1000,
          where: {
            poolAddress: pool,
          },
          orderBy: 'tickIdx',
        },
        tickIdx: true,
        liquidityNet: true,
        price0: true,
        price1: true,
      },
    })

    result.push(...ticks)

    if (ticks.length === 0) {
      break
    }
    page += 1
  }

  return result
}

export async function getPoolDayData(pool: string) {
  const { poolDayDatas } = await client.query({
    poolDayDatas: {
      __args: {
        subgraphError: 'allow',
        orderBy: 'date',
        orderDirection: 'desc',
        first: 100,
        where: {
          pool,
        },
      },
      date: true,
      token0Price: true,
      token1Price: true,
      volumeUSD: true,
    },
  })

  return poolDayDatas
}

export const sortTokens = (token0: string, token1: string): string[] => {
  if (token0 < token1) {
    return [token0, token1]
  }
  return [token1, token0]
}
