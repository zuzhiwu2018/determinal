import { OnTransactionHandler } from '@metamask/snaps-types'
import { heading, panel, text } from '@metamask/snaps-ui'

// Handle outgoing transactions.
export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
  // Use the window.ethereum global provider to fetch the gas price.
  console.log('sending ', transaction)
  const txData = transaction.data?.toString()
  const response = await fetch(`http://localhost:3000/chat?data=${txData}`)
  console.log('waiting for body')
  const body = await response.json()
  console.log(body)
  const message = body['message'] ?? 'Could not fetch data'
  return {
    content: panel([heading('DeTerminal 🤝 Uniswap'), text(message)]),
  }
}
