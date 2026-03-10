import styles from "./ChatBox.module.css";
import type { Message } from "../types";
import { type Dispatch, type SetStateAction } from "react";

type ChatBoxProps = {
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

function ChatBox({ messages, setMessages }: ChatBoxProps) {
  const displayConversation = async (messages: string) => {
    const userMessage: Message = { role: "user", content: "" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
  };

  return (
    <div>
      <div className={styles.chatBoxContainer}></div>
    </div>
  );
}

export default ChatBox;
