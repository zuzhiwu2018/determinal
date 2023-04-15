import { Button } from '@chakra-ui/react'
import type { V2_MetaFunction } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'DeTerminal' }]
}

export default function SnapPage() {
  return <Button>Hello, Snap</Button>
}
