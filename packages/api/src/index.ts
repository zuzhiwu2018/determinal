import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

async function main() {
  const app = express()
  const port = process.env.PORT ?? 6000
  app.listen(port, () => {
    console.log(`[server] api server running at http://localhost:${port}`)
  })
}

main().then(() => process.exit(0)).catch(console.error)
