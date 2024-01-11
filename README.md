# react-chatbot-deepai

This is a simple react chatbot component that uses OPENAI and react-chatbot-kit under the hood to create a seamless user interface for website to have a chatbot.

## Authors

- [@mnshah0101](https://www.github.com/mnshah0101)

## Screenshots

<img src="https://i.ibb.co/qJ7KKBQ/Screen-Shot-2024-01-10-at-10-01-18-PM.png" alt="Screen-Shot-2024-01-10-at-10-01-18-PM" border="0">

## Installation

Install react-chatbot-deepai with npm

```bash
  npm install react-chatbot-deepai
```

## Usage/Examples

```javascript
import Chatbot from "react-chatbot-deepai";
import "react-chatbot-deepai/dist/style.css";

function App() {
  return (
    <div>
      <ChatBot
        OPEN_AI_KEY="SOME_KEY"
        model="gpt-4"
        max_tokens={150}
        chatbot_prompt="You are an assistant for a clothing company called Love Clothing."
        placeholderText="Type a message..."
        buttonText="Chat with us"
      />
    </div>
  );
}
```

[OPEN_AI_KEY, model, max_tokens, chatbot_prompt, placeholderText, buttonText] are all required props.

You can also edit the CSS. The UI is built upon react-chatbot-kit so many of the CSS selectors are the same from that. However, the open/close functionality can also be edited.

```css
.react-chatbot-kit-chat-container {
}

.react-chatbot-kit-chat-inner-container {
}

.react-chatbot-kit-chat-header {
}

.react-chatbot-kit-chat-input-container {
}

.react-chatbot-kit-chat-message-container {
}

.react-chatbot-kit-chat-input {
}

.react-chatbot-kit-chat-input-form {
}

.react-chatbot-kit-chat-input::placeholder {
}

.react-chatbot-kit-chat-btn-send {
}

.react-chatbot-kit-chat-btn-send-icon {
}

.react-chatbot-kit-chat-bot-message-container {
}

.react-chatbot-kit-chat-bot-avatar-container {
}

.react-chatbot-kit-chat-bot-avatar-icon {
}

.react-chatbot-kit-chat-bot-avatar-letter {
}

.react-chatbot-kit-chat-bot-message {
}

.react-chatbot-kit-chat-bot-message-arrow {
}

.react-chatbot-kit-chat-bot-loading-icon-container {
}

.chatbot-loader-container {
}

#chatbot-loader #chatbot-loader-dot1 {
}

#chatbot-loader #chatbot-loader-dot2 {
}

#chatbot-loader #chatbot-loader-dot3 {
}

.react-chatbot-kit-error {
}

.react-chatbot-kit-error-container {
}

.react-chatbot-kit-error-header {
}

.react-chatbot-kit-error-docs {
}
.openedChat {
}
.closedChat {
}

.chatbotbutton {
}
.button_text {
}
```

## Environment Variables

Pass your OPENAI Key Through As A Prop
It is recommended to save it as an environemnt variable and then pass it through the component.

`OPENAI_API_KEY`

## Features

- Choose from 'gpt-4-1106-preview', 'gpt-4', 'gpt-3.5-turbo-1106', 'gpt-3.5-turbo'
- Edit styles
- Close Button Included
- Minimal
