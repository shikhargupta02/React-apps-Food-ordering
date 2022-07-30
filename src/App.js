import React from "react";
import { useState } from "react";
import Header from "./components/header/Header";
import Meals from "./components/display/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showcarthandler = () => {
        setCartIsShown(true);
    };
    const hidecarthandler = () => {
        setCartIsShown(false);
    };
    return ( <
        CartProvider > { " " } {
            cartIsShown && < Cart onClose = { hidecarthandler }
            />}{" "} <
            Header onShowcart = { showcarthandler }
            /> <Meals / >
            <
            /CartProvider>
        );
    }

    export default App;