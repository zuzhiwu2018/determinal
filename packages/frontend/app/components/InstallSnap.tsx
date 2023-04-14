import { Button } from '@adobe/react-spectrum'
import { Suspense, useCallback } from 'react'

/**
 * The snap origin to use.
 * Will default to the local hosted snap if no value is provided in environment.
 */
const defaultSnapOrigin = /* process.env.SNAP_ORIGIN ?? */ `local:http://localhost:8080`

type GetSnapsResponse = Record<string, Snap>

type Snap = {
  permissionName: string
  id: string
  version: string
  initialPermissions: Record<string, unknown>
}

/**
 * Get the installed snaps in MetaMask.
 *
 * @returns The snaps installed in MetaMask.
 */
const getSnaps = async (): Promise<GetSnapsResponse> => {
  return (await window.ethereum.request({
    method: 'wallet_getSnaps',
  })) as unknown as GetSnapsResponse
}

/**
 * Get the snap from MetaMask.
 *
 * @param version - The version of the snap to install (optional).
 * @returns The snap object returned by the extension.
 */
export const getSnap = async (version?: string): Promise<Snap | undefined> => {
  try {
    const snaps = await getSnaps()

    return Object.values(snaps).find(
      (snap) => snap.id === defaultSnapOrigin && (!version || snap.version === version)
    )
  } catch (e) {
    console.log('Failed to obtain installed snap', e)
    return undefined
  }
}

/**
 * Connect a snap to MetaMask.
 *
 * @param snapId - The ID of the snap.
 * @param params - The params to pass with the snap to connect.
 */
const connectSnap = async (
  snapId: string = defaultSnapOrigin,
  params: Record<'version' | string, unknown> = {}
) => {
  await window.ethereum.request({
    method: 'wallet_requestSnaps',
    params: {
      [snapId]: params,
    },
  })
}

export function InstallSnap() {
  const onClick = useCallback(async () => {
    console.log('HERE')
    await connectSnap()
    const installed = await getSnap()
    console.log(installed)
  }, [])
  return (
    <Suspense>
      <Button variant="primary" onPress={onClick}>
        Install Snap
      </Button>
    </Suspense>
  )
}
