import styles from "./InputBox.module.css";
import { type ChangeEvent, type SubmitEvent, useState } from "react";

type InputBoxProps = {
  onSendMessage: (text: string) => void;
};

function InputBox({ onSendMessage }: InputBoxProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const submitResponse = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmission = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userInputValue = inputValue.trim();

    if (!userInputValue) {
      alert("Error - Please enter a valid response!");
    } else {
      onSendMessage(userInputValue);
      setInputValue("");
    }
  };

  return (
    <div className={styles.inputBoxContainer}>
      <form className={styles.formContainer} onSubmit={handleFormSubmission}>
        <div className={styles.inputResponse}>
          <input
            className={styles.inputBox}
            type="text"
            value={inputValue}
            onChange={submitResponse}
            id="car Chat Box"
            placeholder="Enter Text here.."
          ></input>

          <button className={styles.inputButton} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
