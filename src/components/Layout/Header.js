import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => (
  <React.Fragment>
    <header className={classes.header}>
      <h1>Meals</h1>
    </header>
    <div className={classes["main-image"]}>
      <img src={mealsImage} />
    </div>
  </React.Fragment>
);

export default Header;
