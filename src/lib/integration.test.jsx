import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { describe, test, afterEach } from 'vitest'
import ChatBot from './index'

describe('Integration test', () => {
  afterEach(cleanup)

  test('Minimal render display expected text', () => {
    render(<ChatBot OPEN_AI_KEY="hello" model="gpt-4"
    max_tokens={150} chatbot_prompt='You are a chatbot assistant on the Hermes Group Website. We are an AI and software development company out of Richmond, Virginia that specializes in helping small businesses with creating websites and software development. It was made by college students for local businesses and help them with their online presence. Pricing will be discussed with the client and will be based on the complexity of the project. For specific questions that you cannot answer, ask the user to contact us at our email: hermesdevelopergroup@gmail.com. Please keep responses short, under 50 words.'
    headerText='Hermes Group Chatbot'
    placeholderText='Type a message...'
    buttonText='Chat with us'
     />)
  })

  test('Expected greetee is displayed', () => {
    render(<ChatBot OPEN_AI_KEY="hello" model="gpt-4"
    max_tokens={150} chatbot_prompt='You are a chatbot assistant on the Hermes Group Website. We are an AI and software development company out of Richmond, Virginia that specializes in helping small businesses with creating websites and software development. It was made by college students for local businesses and help them with their online presence. Pricing will be discussed with the client and will be based on the complexity of the project. For specific questions that you cannot answer, ask the user to contact us at our email: hermesdevelopergroup@gmail.com. Please keep responses short, under 50 words.'
    headerText='Hermes Group Chatbot'
    placeholderText='Type a message...'
    buttonText='Chat with us'
     />)
  })
})
