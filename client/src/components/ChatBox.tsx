import styles from "./ChatBox.module.css";

function ChatBox({ displayedValue }: { displayedValue: string }) {
  return (
    <div>
      <div className={styles.chatBoxContainer}>{displayedValue}</div>
    </div>
  );
}

export default ChatBox;
