import ChatBoxHeader from "./components/ChatBoxHeader";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [displayedValue, setDisplayedValue] = useState<string>("");

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <ChatBoxHeader />
        <ChatBox displayedValue={displayedValue} />
        <InputBox setDisplayedValue={setDisplayedValue} />
      </div>
    </div>
  );
}

export default App;
