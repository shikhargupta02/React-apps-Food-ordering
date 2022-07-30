import "./CartItem.css";

const CartItem = (props) => {
    const price = `${props.price.toFixed(2)}`;

    return ( <
        li className = "cart-item" >
        <
        div >
        <
        h3 > { props.name } < /h3>{" "} <
        div className = "summary" >
        <
        span className = "price" > { price } < /span>{" "} <
        span className = "amnt" > x { props.amount } < /span>{" "} < /
        div > { " " } <
        /div>{" "} <
        div className = "actions" >
        <
        button onClick = { props.onRemove } > - < /button>{" "} <
        button onClick = { props.onAdd } > + < /button>{" "} < /
        div > { " " } <
        /li>
    );
};

export default CartItem;