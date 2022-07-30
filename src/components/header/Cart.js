import React from "react";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import CartIcon from "../Cart/CartIcon";
import "./Cart.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return ( <
        button className = "carts_holder"
        onClick = { props.onClick } >
        <
        span className = "carts_value" >
        <
        span className = "carticon" >
        <
        CartIcon / >
        <
        /span>{" "} <
        h5 > Your Cart < /h5> <span className="items"> {numberOfItems} </span >
        <
        /span>{" "} <
        /button>
    );
};
export default Cart;