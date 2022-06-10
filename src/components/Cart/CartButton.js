import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => (
  <button className={classes.button} onClick={props.showCart}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>0</span>
  </button>
);

export default CartButton;
