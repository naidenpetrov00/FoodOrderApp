import { Fragment, useContext, useState } from "react";

import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  
  const numberOfCartItems = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <button onClick={props.onClick} className={styles.button}>
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
