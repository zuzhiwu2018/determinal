// Uniswap V3 helpers.
// import { AlchemyProvider } from 'ethers'

// const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY ?? ''

// const provider = new AlchemyProvider('mainnet', ALCHEMY_API_KEY)

// All code below this comment is copyright of the uniswap.fish authors.

interface TokensAmount {
  amountX: number
  amountY: number
  liquidityDelta: number
}

export function getTokensAmountFromDepositAmountUSD(
  P: number,
  Pl: number,
  Pu: number,
  priceUSDX: number,
  priceUSDY: number,
  depositAmountUSD: number
): TokensAmount {
  const deltaL =
    depositAmountUSD /
    ((Math.sqrt(P) - Math.sqrt(Pl)) * priceUSDY +
      (1 / Math.sqrt(P) - 1 / Math.sqrt(Pu)) * priceUSDX)

  let deltaY = deltaL * (Math.sqrt(P) - Math.sqrt(Pl))
  if (deltaY * priceUSDY < 0) deltaY = 0
  if (deltaY * priceUSDY > depositAmountUSD) deltaY = depositAmountUSD / priceUSDY

  let deltaX = deltaL * (1 / Math.sqrt(P) - 1 / Math.sqrt(Pu))
  if (deltaX * priceUSDX < 0) deltaX = 0
  if (deltaX * priceUSDX > depositAmountUSD) deltaX = depositAmountUSD / priceUSDX

  return { amountX: deltaX, amountY: deltaY, liquidityDelta: deltaL }
}

export function estimateFee(
  liquidityDelta: number,
  liquidity: number,
  volume24H: number,
  feeTier: string
): number {
  const feeTierPercentage = getFeeTierPercentage(feeTier)
  const liquidityPercentage = liquidityDelta / (liquidity + liquidityDelta)

  return feeTierPercentage * volume24H * liquidityPercentage
}

export function getFeeTierPercentage(tier: string): number {
  if (tier === '100') return 0.01 / 100
  if (tier === '500') return 0.05 / 100
  if (tier === '3000') return 0.3 / 100
  if (tier === '10000') return 1 / 100
  return 0
}
