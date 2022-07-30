import "./MealForm.css";
import { useRef, useState } from "react";

const MealForm = (props) => {
        const [amountIsValid, setAmountIsValid] = useState(true);
        const amoutInputref = useRef();
        const submitHandler = (event) => {
            event.preventDefault();
            const eneteredAmount = amoutInputref.current.value;
            const enteredAmountNumber = +eneteredAmount;
            if (eneteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
                setAmountIsValid(false);
                return;
            } else { setAmountIsValid(true); }
            props.onAddToCart(enteredAmountNumber);
        };

        return ( <
            form className = "form"
            onSubmit = { submitHandler } >
            <
            div >
            <
            span className = "amt" > Amount < /span>{" "} <
            input ref = { amoutInputref }
            className = "in"
            type = { "number" }
            defaultValue = { "1" } >
            <
            /input>{" "} < /
            div > { " " } <
            div >
            <
            button className = "but" > +Add < /button>{" "} {!amountIsValid && ( <
            p className = "error" > Please enter a valid amount. < /p>
        )
    } { " " } <
    /div>{" "} < /
form >
);
};
export default MealForm;