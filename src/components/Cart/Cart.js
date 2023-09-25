import { useContext } from "react";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import stylesCart from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
 
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal hideCart={props.hideCart}>
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
      <div className={stylesCart.actions}>
        <button className={stylesCart.buttonAlt} onClick={props.hideCart}>
          Close
        </button>
        {hasItems && <button className={stylesCart.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
