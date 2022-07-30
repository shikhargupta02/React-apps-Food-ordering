import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";
import "./Cart.css";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount;
    const hasItem = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const cartItemRemoveHandler = (item) => {
        cartCtx.removeItem(item);
    };

    const Cartitems = ( <
        ul className = "list" > { " " } {
            cartCtx.items.map((item) => ( <
                CartItem key = { item.id }
                id = { item.id }
                name = { item.name }
                amount = { item.amount }
                price = { item.price }
                onRemove = { cartItemRemoveHandler.bind(null, item.id) }
                onAdd = { cartItemAddHandler.bind(null, item) }
                />
            ))
        } { " " } <
        /ul>
    );

    return ( <
        Modal onClick = { props.onClose } > { " " } { Cartitems } { " " } <
        div className = "amount" >
        <
        span className = "tot" > Total Amount < /span>{" "} <
        span className = "am" > Rs. { totalAmount } < /span>{" "} < /
        div > { " " } <
        div className = "buttons" >
        <
        button className = "buton"
        onClick = { props.onClose } > { " " }
        Close { " " } <
        /button>{" "} {
        hasItem && < button className = "buton" > Order < /button>}{" "} < /
        div > { " " } <
        /Modal>
    );
};
export default Cart;