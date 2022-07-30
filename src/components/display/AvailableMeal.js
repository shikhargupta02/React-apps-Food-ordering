// import react from "react";
import MealsItems from "./Mealsitems/MealsItems";
import "./AvailableMeal.css";
const DummyMeals = [{
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 350,
    },
    {
        id: "m2",
        name: "Pizza",
        description: "Thin crust pizza",
        price: 220,
    },
    {
        id: "m3",
        name: "Burger",
        description: "Best barbeque burger",
        price: 230,
    },
    {
        id: "m4",
        name: "Salad",
        description: "Healthy and tasty",
        price: 90,
    },
];
const AvailableMeals = () => {
    return ( <
        section className = "meal" >
        <
        ul className = "meals-list" > { " " } {
            DummyMeals.map((meal) => ( <
                MealsItems key = { meal.id }
                id = { meal.id }
                name = { meal.name }
                description = { meal.description }
                price = { meal.price }
                />
            ))
        } { " " } <
        /ul>{" "} <
        /section>
    );
};
export default AvailableMeals;