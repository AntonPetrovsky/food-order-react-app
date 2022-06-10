import React from "react";
import CartButton from "../Cart/CartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => (
  <React.Fragment>
    <header className={classes.header}>
      <h1>Meals</h1>
      <CartButton showCart={props.showCart} />
    </header>

    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="Meals" />
    </div>
  </React.Fragment>
);

export default Header;
