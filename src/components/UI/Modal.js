import { Fragment } from "react/cjs/react.production.min";
import ReactDOM from "react-dom";
import "./Modal.css";
const Backdrop = (props) => {
    return <div className = "backdrop"
    onClick = { props.onClick } > < /div>;
};

const ModalOverlay = (props) => {
    return ( <
        div className = "modal" >
        <
        div > { props.children } < /div>{" "} < /
        div >
    );
};

const PortalElements = document.getElementById("overlays");

const Modal = (props) => {
        return ( <
            Fragment > { " " } {
                ReactDOM.createPortal( < Backdrop onClick = { props.onClick }
                        / > , PortalElements) } { " " } {
                        ReactDOM.createPortal( <
                            ModalOverlay > { props.children } < /ModalOverlay>,
                            PortalElements
                        )
                    } { " " } <
                    /Fragment>
            );
        };
        export default Modal;