import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Cart from "./Cart";
import mealsImage from "./../../assets/meals.jpg";
import "./Header.css";

const Header = (props) => {
    return ( <
        Fragment >
        <
        div className = "head" >
        <
        h1 > MyMeals < /h1>{" "} <
        Cart className = "cart"
        onClick = { props.onShowcart }
        />{" "} <
        /div>{" "} <
        div className = "main-image" >
        <
        img src = { mealsImage }
        alt = "food" / >
        <
        /div>{" "} <
        /Fragment>
    );
};
export default Header;