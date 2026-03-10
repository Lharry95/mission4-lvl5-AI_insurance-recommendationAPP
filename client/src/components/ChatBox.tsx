import styles from "./ChatBox.module.css";
import type { Message } from "../types";

function ChatBox({ messages }: { messages: Message }) {
  return (
    <div>
      <div className={styles.chatBoxContainer}></div>
    </div>
  );
}

export default ChatBox;
