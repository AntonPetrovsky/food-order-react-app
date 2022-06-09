import classes from "./Input.module.css";

const Input = (props) => (
  <div className={classes.input}>
    <label>{props.input.label}</label>
    <input {...props.input} />
  </div>
);

export default Input;
