import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [isAnimated, setAnimated] = useState(false);

  const cartContext = useContext(CartContext);

  const cartItemsAmount = cartContext.cartItems.reduce(
    (accumulator, item) => accumulator + item.amount,
    0
  );

  const buttonStyles = `${classes.button} ${isAnimated ? classes.bump : ""}`;

  useEffect(() => {
    setAnimated(true);

    const timer = setTimeout(() => setAnimated(false), 300);

    return () => clearTimeout(timer);
  }, [cartItemsAmount]);

  return (
    <button className={buttonStyles} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default CartButton;
