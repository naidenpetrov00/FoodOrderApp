import { useRef, useState } from "react";
import Input from "../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} id={props.id} />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
