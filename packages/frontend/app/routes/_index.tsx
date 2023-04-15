import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ActionArgs, json } from '@remix-run/node'
import { Form, useActionData, V2_MetaFunction } from '@remix-run/react'
import { AgentStep } from 'langchain/dist/schema'
import invariant from 'tiny-invariant'
import { Reply, replyToMessage } from '~/lib/agent'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'DeTerminal' }]
}

function NoResponse() {
  return (
    <Center w="full" h="full">
      Ask ChatGPT anything about Uniswap V3
    </Center>
  )
}

function Step({ step }: { step: AgentStep }) {
  return (
    <Card w="5xl">
      <CardHeader>{step.action.tool}</CardHeader>
      <Divider />
      <CardBody>
        <VStack w="full">
          <Box w="full">Inputs: {step.action.toolInput}</Box>
          <Box w="full">Log: {step.action.log}</Box>
          <Box w="full">Observation: {step.observation}</Box>
        </VStack>
      </CardBody>
    </Card>
  )
}

function ChatResponse({ response }: { response: Reply }) {
  return (
    <VStack>
      <VStack spacing="6">
        {response.intermediateSteps.map((step, idx) => (
          <Step key={idx} step={step} />
        ))}
      </VStack>
      <Text>{response.output}</Text>
    </VStack>
  )
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData()
  const userMessage = formData.get('message')
  invariant(typeof userMessage === 'string', 'message must be a string')
  const response = await replyToMessage({ userMessage })
  return json(response)
}

export default function IndexPage() {
  const response = useActionData<typeof action>()
  return (
    <VStack h="full" w="full" px="8" py="4">
      <VStack flexGrow="1" overflowY="auto">
        {response ? <ChatResponse response={response} /> : <NoResponse />}
      </VStack>
      <Box w="full">
        <Form method="post">
          <Input w="full" name="message" />
          <Button hidden type="submit">
            Chat
          </Button>
        </Form>
      </Box>
    </VStack>
  )
}
