import Card from "../UI/Card";
import MealItem from "./MealItem";

import meals from "../../assets/dummy-meals";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((m) => (
            <MealItem meal={m} key={m.id} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
