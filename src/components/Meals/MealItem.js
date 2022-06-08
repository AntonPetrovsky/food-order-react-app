import classes from "./MealItem.module.css";

const MealItem = (props) => (
  <li className={classes.meal}>
    <div>
      <h3>{props.meal.name}</h3>
      <div className={classes.description}>{props.meal.description}</div>
      <div className={classes.price}>{`$${props.meal.price}`}</div>
    </div>
  </li>
);

export default MealItem;
