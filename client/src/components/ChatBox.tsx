import styles from "./ChatBox.module.css";
import type { Message } from "../types";

type ChatBoxProps = {
  messages: Message[];
};

function ChatBox({ messages }: ChatBoxProps) {
  return (
    <div>
      <div className={styles.chatBoxContainer}>
        {messages.map((message) => (
          <div key={message.id}>
            <p className={styles.messageResponse}>
              {message.role}: {message.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
