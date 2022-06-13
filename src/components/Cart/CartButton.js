import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsAmount = cartContext.cartItems.reduce(
    (accumulator, item) => accumulator + item.amount,
    0
  );

  return (
    <button className={classes.button} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default CartButton;
