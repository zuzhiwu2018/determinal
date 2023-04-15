import { PassThrough } from 'node:stream'
import { Response } from '@remix-run/node'
import { json, LoaderArgs } from '@remix-run/node'
import { ethers } from 'ethers'
import INonfungiblePositionManager from '@uniswap/v3-periphery/artifacts/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json'
import { tickToPrice } from '~/lib/tools'
import { createAgent } from '~/lib/agent'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': '*',
}

export async function loader({ request }: LoaderArgs) {
  if (request.method === 'OPTIONS') {
    return json(
      { message: 'ok' },
      {
        headers: {
          'Keep-Alive': 'timeout=60',
          ...cors,
        },
      }
    )
  }
  const url = new URL(request.url)
  const data = url.searchParams.get('data') ?? ''
  console.log(data)
  if (!data.startsWith('0x88316456')) {
    return json({ message: 'No insight on this contract' })
  }

  const iface = new ethers.Interface(INonfungiblePositionManager.abi)
  const decoded = iface.parseTransaction({ data })
  if (!decoded) {
    return json({ message: 'No insight on this contract' })
  }
  const [
    [
      _token0, // usdc
      _token1, // weth
      _fee,
      tickLower,
      tickUpper,
      amount0Desired,
      amount1Desired,
      _amount0Min,
      _amount1Min,
      _recipient,
      _deadline,
    ],
  ] = decoded.args
  const token0 = 'USDC'
  const token1 = 'ETH'
  const amount0 = Number(amount0Desired) / Math.pow(10, 6)
  const amount1 = Number(amount1Desired) / Math.pow(10, 18)
  const a = Math.pow(10, 18 - 6)
  const tl = a / tickToPrice(Number(tickLower))
  const tu = a / tickToPrice(Number(tickUpper))
  const agent = await createAgent()
  console.log('inspect tx', tickLower, tickUpper, amount0, amount1, tl, tu)
  const body = new PassThrough()

  setTimeout(async () => {
    console.log('calling agent')
    const reply = await agent(`Sending uniswap pool mint transaction for pool ${token1}-${token0}.
    Depositing ${amount1} ${token1} and ${amount0} ${token0}, price range is ${tl} to ${tu}.
    What fees should I expected daily, weekly and monthly?
    Describe in human readable form. No machine text.
  `)
    console.log(reply)
    body.write(JSON.stringify({ message: reply.output }))
    body.end()
  }, 1)

  return new Response(body, {
    headers: {
      'content-type': 'application/json',
      'keep-alive': 'timeout=60',
      ...cors,
    },
  })
}
