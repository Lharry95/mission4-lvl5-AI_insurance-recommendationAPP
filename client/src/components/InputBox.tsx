import styles from "./InputBox.module.css";
import { type MouseEvent } from "react";

function InputBox() {
  const submitResponse = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Button was clicked!", event.clientX);
  };

  return (
    <div className={styles.inputBoxContainer}>
      <div className={styles.inputResponse}>
        <input
          className={styles.inputBox}
          type="text"
          id="car Chat Box"
          placeholder="Enter Text here.."
        ></input>
      </div>
      <button className={styles.inputButton} onClick={submitResponse}>
        Submit
      </button>
    </div>
  );
}

export default InputBox;
