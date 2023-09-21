import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>Amount</label>
      <input id={props.id} type="number" defaultValue="1"></input>
    </div>
  );
};

export default Input;
