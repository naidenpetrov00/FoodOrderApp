import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>{meal.price.toFixed(2)}</p>
      </div>
      <MealItemForm id={meal.id}/>
    </li>
  );
};

export default MealItem;
