import styles from "./InputBox.module.css";
import { type MouseEvent, type ChangeEvent, useState } from "react";

type ChildAProps = {
  setDisplayedValue: React.Dispatch<React.SetStateAction<string>>;
};

function InputBox({ setDisplayedValue }: ChildAProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const submitResponse = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log("Button was clicked!", event.target.value);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDisplayedValue(inputValue);
    setInputValue("");
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
