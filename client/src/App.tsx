import ChatBoxHeader from "./components/ChatBoxHeader";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <ChatBoxHeader />
        <ChatBox />
        <InputBox />
      </div>
    </div>
  );
}

export default App;
