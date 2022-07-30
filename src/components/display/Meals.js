import MealsSum from "./MealsSum";
import AvailableMeal from "./AvailableMeal";
import { Fragment } from "react/cjs/react.production.min";

const Meals = () => {
  return (
    <Fragment>
      <MealsSum />
      <AvailableMeal />
    </Fragment>
  );
};

export default Meals;
