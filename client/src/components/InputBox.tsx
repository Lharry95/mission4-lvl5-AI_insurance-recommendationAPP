import styles from "./InputBox.module.css";
import {
  type MouseEvent,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useState,
} from "react";
import type { Message } from "../types";

type MessageProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

function InputBox({ setMessages }: MessageProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const submitResponse = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    const userInputValue = inputValue.trim();
    const newUserMessage: Message = {
      role: "user",
      content: userInputValue,
    };

    event.preventDefault();

    if (!userInputValue || !isNaN(Number(userInputValue))) {
      alert("Error - Please enter a valid response!");
    } else {
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInputValue("");
    }
  };

  return (
    <div className={styles.inputBoxContainer}>
      <div className={styles.inputResponse}>
        <input
          className={styles.inputBox}
          type="text"
          value={inputValue}
          onChange={submitResponse}
          id="car Chat Box"
          placeholder="Enter Text here.."
        ></input>
      </div>
      <button
        className={styles.inputButton}
        type="submit"
        onClick={handleButtonClick}
      >
        Submit
      </button>
    </div>
  );
}

export default InputBox;
