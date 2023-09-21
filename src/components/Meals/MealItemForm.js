import Input from "../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input id={props.id}/>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
