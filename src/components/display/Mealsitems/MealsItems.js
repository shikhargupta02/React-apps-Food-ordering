import "./MealsItems.css";
import MealForm from "./MealForm";
import { useContext } from "react";
import CartContext from "../../../store/Cart-Context";

const MealsItems = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `${props.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        });
    };
    return ( <
        li className = "mealitems" >
        <
        div className = "fl" >
        <
        div className = "it" >
        <
        h2 className = "nam" > { props.name } < /h2>{" "} <
        div className = "des" > { props.description } < /div>{" "} <
        div className = "price" > { price } < /div>{" "} < /
        div > { " " } <
        div className = "for" >
        <
        MealForm id = { props.id }
        onAddToCart = { addToCartHandler }
        />{" "} < /
        div > { " " } <
        /div>{" "} <
        div className = "diff" > < /div>{" "} < /
        li >
    );
};
export default MealsItems;