import { OpenAI } from 'langchain/llms/openai'
import { initializeAgentExecutor } from 'langchain/agents'
import { Tool } from 'langchain/tools'
import { AgentStep } from 'langchain/dist/schema'
import {
  UniswapDeposit,
  UniswapFeeCalculator,
  UniswapPoolInformation,
  UniswapPoolLiquidity,
} from './tools'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ''

export type Reply = {
  output: string
  intermediateSteps: AgentStep[]
}

export async function createAgent() {
  const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.1 })
  const tools: Tool[] = [
    new UniswapPoolInformation(),
    new UniswapDeposit(),
    new UniswapFeeCalculator(),
    new UniswapPoolLiquidity(),
  ]
  const executor = await initializeAgentExecutor(tools, model, 'zero-shot-react-description')
  const systemMessage = `
Context:
complete the task without guessing any input. If unsure, ask the user for more information.

If the pool fee tier is not specified, default to 0.05%.
`
  return (input: string) => executor.call({ input: `${input}\n${systemMessage}` })
}

export async function replyToMessage({ userMessage }: { userMessage: string }): Promise<Reply> {
  const agent = await createAgent()
  // const result = await agent(userMessage)
  console.log('asking chatgpt...', userMessage)
  // 'I want to deposit 1000$ in the ETH-USDC pool, with bounds between 1500 and 2100. how much fees should i expect?'
  const result = await agent(userMessage)
  console.log(result)
  return {
    output: result.output,
    intermediateSteps: result.intermediateSteps,
  }
}
