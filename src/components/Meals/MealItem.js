import { useContext } from "react";

import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";
import CartContext from "../../store/cart-context";

const MealItem = ({ meal }) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>{meal.price.toFixed(2)}</p>
      </div>
      <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
