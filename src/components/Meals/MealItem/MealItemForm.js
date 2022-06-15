import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    cartContext.addCartItem(props.meal);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        input={{
          label: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
