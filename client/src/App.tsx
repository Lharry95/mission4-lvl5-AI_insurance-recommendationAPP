import ChatBoxHeader from "./components/ChatBoxHeader";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import styles from "./App.module.css";
import { useState } from "react";
import type { Message } from "./types";

function App() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "I'm Tina. I help you to choose the right insurance policy. May I ask you a few personal questions to make sure I recommend the best policy for you?",
    },
  ]);

  const handleUserMessage = async (userMessage: string) => {
    const newUserMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: userMessage,
    };
    const updatedConversation = [...messages, newUserMessage];
    setMessages(updatedConversation);

    try {
      const response = await fetch(`${API_BASE_URL}/api/policy-assistant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          conversation: updatedConversation,
        }),
      });
      const data = await response.json();

      const assisstantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };
      setMessages((prevMessages) => [...prevMessages, assisstantMessage]);
    } catch (error) {
      console.log(error);
      alert("Error, something has gone wrong!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <ChatBoxHeader />
        <ChatBox messages={messages} />
        <InputBox onSendMessage={handleUserMessage} />
      </div>
    </div>
  );
}

export default App;
