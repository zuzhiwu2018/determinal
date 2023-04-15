import { Tool } from 'langchain/tools'
import { estimateFee, getTokensAmountFromDepositAmountUSD } from './uniswap'

export class UniswapPoolInformation extends Tool {
  name = 'uniswap-pool-information'
  description = `lookup information about a uniswap pool for the given tokens X and Y and fee.
returns the available liquidity for token X and Y, the price of token X and Y in USD, and the
volume over the past 24 hours.
input is a comma-separated list of the following fields (values only, no key).

 - tokenX: the symbol of token X.
 - tokenY: the symbol of token Y.
 - fee: the pool fee. 1% -> 10000, 0.3% -> 3000, 0.05% -> 500, 0.01% -> 100

output is a comma-separated list of the following fields (values only, no key).

  - liquidityX: liquidity of token X.
  - liquidityY: liquidity of token Y.
  - price: price of token X in terms of Y.
  - priceX: price of X, in USD.
  - priceY: price of Y, in USD.
  - volume24H: volume in the past 24H, in USD.
  - fee: the pool fee. 1% -> 10000, 0.3% -> 3000, 0.05% -> 500, 0.01% -> 100
`

  async _call(input: string): Promise<string> {
    console.log(input)
    return '20,50000,1900,1900,1,2000'
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
 - liquidity: total pool liquidity.
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
