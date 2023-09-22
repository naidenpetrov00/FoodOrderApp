import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>Amount</label>
      <input
        ref={ref}
        id={props.id}
        type="number"
        defaultValue="1"
      ></input>
    </div>
  );
});

export default Input;
