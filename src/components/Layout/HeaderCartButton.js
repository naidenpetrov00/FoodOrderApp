import { Fragment, useState } from "react";

import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <button onClick={props.onClick} className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>0</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
