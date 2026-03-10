import ChatBoxHeader from "./components/ChatBoxHeader";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import styles from "./App.module.css";
import { useState } from "react";
import type { Message } from "./types";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm Tina. I help you to choose the right insurance policy. May I ask you a few personal questions to make sure I recommend the best policy for you?",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <ChatBoxHeader />
        <ChatBox messages={messages} />
        <InputBox setMessages={setMessages} />
      </div>
    </div>
  );
}

export default App;
