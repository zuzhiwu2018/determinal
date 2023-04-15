import { ActionArgs, json } from '@remix-run/node'

export async function action({}: ActionArgs) {
  return json({ message: 'Hello' })
}
