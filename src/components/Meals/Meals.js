import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => (
  <React.Fragment>
    <MealsSummary />
    <AvailableMeals />
  </React.Fragment>
);

export default Meals;
