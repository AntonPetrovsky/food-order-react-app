import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => (
  <form className={classes.form}>
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

export default MealItemForm;
