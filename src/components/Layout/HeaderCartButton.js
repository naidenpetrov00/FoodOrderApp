import { Fragment, useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);
  const cartContext = useContext(CartContext);

  const numberOfCartItems = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonIsHighLighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <Fragment>
      <button
        onClick={props.onClick}
        className={`${styles.button} ${buttonIsHighLighted && styles.bump}`}
      >
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
