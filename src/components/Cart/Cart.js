import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import stylesCart from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

  return (
    <Modal hideCart={props.hideCart}>
      <ul className={stylesCart.cartItems}>
        {cartItems.map((i) => (
          <CartItem key={i.id} item={i} />
        ))}
      </ul>
      <div className={stylesCart.total}>
        <span>Total Amount</span>
        <span>69</span>
      </div>
      <div className={stylesCart.actions}>
        <button className={stylesCart.buttonAlt} onClick={props.hideCart}>
          Close
        </button>
        <button className={stylesCart.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
