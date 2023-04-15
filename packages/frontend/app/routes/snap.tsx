import { Button, Center } from '@chakra-ui/react'
import type { V2_MetaFunction } from '@remix-run/react'
import { useCallback } from 'react'
import { connectSnap, getSnap } from '~/lib/snap'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'DeTerminal' }]
}

export default function SnapPage() {
  const onInstall = useCallback(async () => {
    await connectSnap()
    const snap = await getSnap()
    console.log(snap)
  }, [])

  return (
    <Center h="full" w="full">
      <Button onClick={onInstall}>Install Snap</Button>
    </Center>
  )
}
