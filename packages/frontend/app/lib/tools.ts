import { Client } from 'ts-postgres'
import { Tool } from 'langchain/tools'
import { estimateFee, getTokensAmountFromDepositAmountUSD } from './uniswap'

function splitArgs(args: string) {
  return args.split(',').map((v) => {
    const parts = v.trim().split(':')
    return parts[parts.length - 1].trim()
  })
}

async function makeClient() {
  const client = new Client({ user: 'determinal', password: 'determinal', database: 'determinal' })
  await client.connect()

  return client
}

function tickToPrice(tick: number): number {
  return Math.pow(1.0001, tick)
}

/*
function feeTierToTickSpacing(feeTier: number) {
  switch (feeTier) {
    case 100: {
      return 1
    }
    case 500: {
      return 10
    }
    case 3000: {
      return 60
    }
    case 10000: {
      return 200
    }
    default: {
      throw Error('invalid fee tier')
    }
  }
}
*/

export class UniswapPoolLiquidity extends Tool {
  name = 'uniswap-pool-liquidity-in-range'
  description = `returns the total liquidity in the given price range in a uniswap pool for the given tokens X and Y and fee.

input is a comma-separated list of the following fields (values only, no key).
 - tokenX: the symbol of token X.
 - tokenY: the symbol of token Y.
 - Pl: liquidity position lower bound on price P.
 - Pu: liquidity position upper bound on price P.
 - fee: the pool fee. 1% -> 10000, 0.3% -> 3000, 0.05% -> 500, 0.01% -> 100

output is a comma-separated list of the following fields (values only, no key).
 - totalLiquidity: total liquidity in the given price range.
`
  async _call(args: string): Promise<string> {
    const input = splitArgs(args)
    const tokenX = input[0]
    const tokenY = input[1]
    const Pl = parseFloat(input[2])
    const Pu = parseFloat(input[3])
    const fee = +input[4]
    console.log(`lookup pool liquidity`, tokenX, tokenY, Pl, Pu, fee)

    const client = await makeClient()
    // const pool = [...(await client.query(`select tick from pools`))][0]
    // const currTick = pool.data[0]
    // const tickSpacing = feeTierToTickSpacing(fee)
    const ticks = await client.query(`select tick_idx, liquidity from ticks order by tick_idx desc`)

    let total = BigInt(0)
    const a = Math.pow(10, 18 - 6)
    for (let tick of ticks) {
      const [tick_idx, liq] = tick.data
      if (tick_idx && liq) {
        const ti = +tick_idx.toString()
        const l = liq.toString()
        const b = a / tickToPrice(ti)
        // const c = a / tickToPrice(currTick)
        // const u = a / tickToPrice(ti + tickSpacing)
        // console.log(ti, b, u, l, c)
        if (b >= Pl && b <= Pu) {
          total += BigInt(l)
        }
      }
    }

    const res = total / BigInt(a)
    return res.toString()
  }
}

export class UniswapPoolInformation extends Tool {
  name = 'uniswap-pool-information'
  description = `lookup information about a uniswap pool for the given tokens X and Y and fee.
returns the available liquidity for token X and Y, the price of token X and Y in USD, and the
volume over the past 24 hours.
input is a comma-separated list of the following fields (values only, no key).

 - tokenX: the symbol of token X.
 - tokenY: the symbol of token Y.
 - fee: the pool fee. 1% -> 10000, 0.3% -> 3000, 0.05% -> 500, 0.01% -> 100

output is a comma-separated list of the following fields.

  - liquidityX: liquidity of token X.
  - liquidityY: liquidity of token Y.
  - price: price of token X in terms of Y.
  - priceX: price of X, in USD.
  - priceY: price of Y, in USD.
  - volume24H: volume in the past 24H, in USD.
`

  async _call(args: string): Promise<string> {
    console.log(args)
    // const input = args.split(',').map((v) => v.trim())
    // const tokenX = input[0]
    // const tokenY = input[1]
    // const fee = input[2]
    // const { liquidityX, liquidityY, price, priceX, priceY, volume24H } = getPoolInformation(tokenX, tokenY)
    return 'liquidityX: 61830000,liquidityY: 166083000,price: 2110,priceX: 2110,priceY: 1,volume24H: 37291000'
  }
}

export class UniswapDeposit extends Tool {
  name = 'uniswap-deposit'
  description = `compute the amount of tokens X and Y to deposit in a uniswap pool given a deposit in USD.
lookup any missing input using uniswap-pool-information first!

input is a comma-separated list of the following fields (values only, no key).

  - P: price of token X in terms of Y.
  - Pl: liquidity position lower bound on price P.
  - Pu: liquidity position upper bound on price P.
  - priceXUSD: price of X, in USD.
  - priceYUSD: price of Y, in USD.
  - depositAmountUSD: deposit amount in USD.

output is a comma-separated list of the following fields (values only, no key).

 - amountX: amount of token X to deposit.
 - amountY: amount of token Y to deposit.
 - liquidityDelta: change in pool liquidity.
`

  async _call(args: string): Promise<string> {
    const input = args.split(',').map((v) => v.trim())
    const P = parseFloat(input[0])
    const Pl = parseFloat(input[1])
    const Pu = parseFloat(input[2])
    const priceXUSD = parseFloat(input[3])
    const priceYUSD = parseFloat(input[4])
    const depositAmountUSD = parseFloat(input[5])
    const { amountX, amountY, liquidityDelta } = getTokensAmountFromDepositAmountUSD(
      P,
      Pl,
      Pu,
      priceXUSD,
      priceYUSD,
      depositAmountUSD
    )
    return `${amountX},${amountY},${liquidityDelta}`
  }
}

export class UniswapFeeCalculator extends Tool {
  name = 'uniswap-fee-calculator'
  description = `estimate the income fee for a uniswap liquidity position.
lookup any missing input using uniswap-pool-information first!

input is a comma-separated list of the following fields (values only, no key).

 - liquidityDelta: change in pool liquidity.
 - totalLiquidity: total pool liquidity in the pool price range.
 - volume24H: trading volume in the past 24 hours.
 - fee: the pool fee. 1% -> 10000, 0.3% -> 3000, 0.05% -> 500, 0.01% -> 100

output is a comma-separated list of the following fields (values only, no key).

  - fee24H: estimated fee over 24 hours.
  - fee1W: estimated fee over 1 week.
  - fee1M: estimated fee over 1 month.
`

  async _call(args: string): Promise<string> {
    const input = args.split(',').map((v) => v.trim())
    const liquidityDelta = parseFloat(input[0])
    const liquidity = parseFloat(input[1])
    const volume24H = parseFloat(input[2])
    const feeTier = input[3]
    const fee24H = estimateFee(liquidityDelta, liquidity, volume24H, feeTier)
    const fee1W = fee24H * 7
    const fee1M = fee24H * 30
    return `${fee24H},${fee1W},${fee1M}`
  }
}
