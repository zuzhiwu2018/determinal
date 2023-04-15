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


## Screenshots

Ask a question about Uniswap V3, get an easy-to-understand answer. We also
include a way to see all steps that the AI had to take to answer you.

![screen1](https://user-images.githubusercontent.com/282580/232247915-0b8ae437-21df-478f-b4f9-502d1d3fa123.png)


Install MetaMask Snap

![screen2](https://user-images.githubusercontent.com/282580/232247960-66458dab-668c-48bb-8aed-c1f671825444.png)


Display AI recommendation directly in MetaMask!

![screen3](https://user-images.githubusercontent.com/282580/232247982-c039e4b4-7a9c-4210-bfe4-eb27f2027e1e.png)

