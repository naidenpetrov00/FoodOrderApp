import React, { useContext, useState } from "react";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import stylesCart from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isChecking, setIsChecking] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orederHandler = () => {
    setIsChecking(true);
  };

  const submitOrderhandler = async (userData) => {
    setIsSubmiting(true);
    const response = await fetch(
      "https://react-http-cf2f1-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ userData, orderedItems: cartContext.items }),
      }
    );

    setIsSubmiting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  const cartModalContent = (
    <React.Fragment>
      <ul className={stylesCart.cartItems}>
        {cartContext.items.map((i) => (
          <CartItem
            key={i.id}
            item={i}
            onRemove={cartItemRemoveHandler}
            onAdd={cartItemAddHandler}
          />
        ))}
      </ul>
      <div className={stylesCart.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChecking && (
        <Checkout onSubmit={submitOrderhandler} onCancel={props.hideCart} />
      )}
      {!isChecking && (
        <div className={stylesCart.actions}>
          <button className={stylesCart.buttonAlt} onClick={props.hideCart}>
            Close
          </button>
          {hasItems && (
            <button className={stylesCart.button} onClick={orederHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
  const isSubmitingModalContent = <p>Sending order...</p>;
  const didSubmitModalContent = <p>Successfully sent the order!</p>;
  return (
    <Modal hideCart={props.hideCart}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmitingModalContent}
      {!isSubmiting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
