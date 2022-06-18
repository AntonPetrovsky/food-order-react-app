import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const addCartItem = (item) => cartContext.addCartItem({ ...item, amount: 1 });

  const removeCartItem = (id) => cartContext.removeCartItem(id);

  const cartItems = cartContext.cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onAdd={addCartItem.bind(null, item)}
      onRemove={removeCartItem.bind(null, item.id)}
    />
  ));

  const hasItems = cartItems.length > 0;

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{`$${cartContext.totalPrice.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
