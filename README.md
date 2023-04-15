# DeTerminal

Uniswap V3 🤝 ChatGPT

This project uses OpenAPI and LangChain to describe Uniswap V3 liquidity
positions.
We create an AI that uses on-chain data (indexed by `packages/university`)
and some knowledge of how Uniswap V3 works to predict the daily, weekly and
monthly income of a position.

We integrate with MetaMask by creating a Snap that uses the API to describe
a Uniswap position in simple terms.


## Running Locally

 - Install all packages with `pnpm i`
 - Spin up the postgres database with `docker-compose up`
 - Index some data into postgres with `pnpm run start:uni`
 - Start the frontend/api with `pnpm run start:frontend`
 - Start the MetaMask Snap with `pnpm run start:snap`
 - Open the browser at `http://localhost:3000`, chat with the AI and install the Snap
 - Try to create a new liquidity position on Uniswap!

