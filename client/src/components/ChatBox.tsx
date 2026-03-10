import styles from "./ChatBox.module.css";
import type { Message } from "../types";

type ChatBoxProps = {
  messages: Message[];
};

function ChatBox({ messages }: ChatBoxProps) {
  return (
    <div>
      <div className={styles.chatBoxContainer}></div>
    </div>
  );
}

export default ChatBox;
