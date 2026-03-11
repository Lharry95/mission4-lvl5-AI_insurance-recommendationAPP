# Turners AI Mock Interviewer - Frontend

## Overview

This is an AI Insurance Policy application for Turners Insurance.
It assists customers by providing recommendations for insurance policies based on their requirements using a
conversational AI interviewer powered by Google Gemini.

## Features

- Initial prompt is made by the AI
- Clean conversational chat interface displaying both AI/Tina and user messages
- Submit responses by clicking the Submit button or pressing Enter
- Auto-scrolling conversation box to keep up with the latest messages

## File Structure

```
server/
    ├── server.js               # Express server and API routes
    ├── services/
    │   └── aiAssistant.js    # Gemini AI interview logic
    ├── config/
    │   └── aiClient.js         # Gemini client configuration and API key setup
    ├── package.json            # Backend dependencies
    └── package-lock.json



client/
    └── src/
        ├── components/
        │     ├── ChatBox.module.css          # ChatBox styling
        │     ├── ChatBox.tsx                 # Displaying conversation between AI and user
        │     ├── ChatBoxHeader.module.css    # Header styling
        │     ├── ChatBoxHeader.tsx           # Header
        │     ├── InputBox.module.css         # Input box styling
        │     ├── InputBox.tsx                # Frontend logic
        │     └── logo.png                    # Turners Cars logo
        ├──App.module.css                     # Front end styling
        ├──App.tsx                            # API communication
        ├──styles.d.ts                        # declaring styling module
        ├── types.ts                          # Defining reused typescript types and interfaces
        ├── package.json                      # Frontend dependencies
        ├── package-lock.json
        ├── tsconfig.app.json
        └── tsconfig.node.json



```

## How It Works

1. The AI prompts user with an initial message.
2. The user types their response and clicks Submit or presses Enter
3. The response is sent to the backend server which communicates with Google Gemini
4. The AI responds with a follow up question based on the user's answer
5. This continues for at least 5 questions
6. At the end the AI provides a recommendation out of three policies based on the user's answers.

## How To Run

Make sure the backend server is running and frontend app is running by using the command

`npm run dev`

in your terminal.

The frontend connects to the backend at:

```
http://localhost:3000/api/policy-assistant
```

## Technologies Used

- React
- Typescript (Vanilla)
- JavaScript (Vanilla)
- Fetch API for backend communication

## Team

- **Hayley**
- **Lharyzza**
- **Justin**
- **Paywand**
