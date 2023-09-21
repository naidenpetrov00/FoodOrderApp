import { Fragment, useState } from "react";

import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";

import styles from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";

const Header = (props) => {
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <Fragment>
      {showCart && <Cart hideCart={cartHandler} />}
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={cartHandler} />
      </header>
      <div className={styles.mainImage}>
        <img src={mealImage} alt="mealImage"></img>
      </div>
    </Fragment>
  );
};

export default Header;
