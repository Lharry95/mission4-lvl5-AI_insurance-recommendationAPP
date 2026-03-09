import ChatBoxHeader from "./components/ChatBoxHeader";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <ChatBoxHeader />
      <ChatBox />
      <InputBox />
    </div>
  );
}

export default App;
