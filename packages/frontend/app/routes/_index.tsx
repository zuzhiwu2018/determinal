import type { V2_MetaFunction } from '@remix-run/react'
import { InstallSnap } from '~/components/InstallSnap'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'DeTerminal' }]
}

export default function Index() {
  return <InstallSnap />
}
