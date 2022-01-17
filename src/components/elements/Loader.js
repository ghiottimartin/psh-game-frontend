import React from "react";
import "../../assets/css/Loader.css";

function Loader(props) {

    const display = props.display;

    return (
        <div style={{ display: display ? "block" : "none" }} className="half-circle-spinner center-block">
            <div className="circle circle-1" />
            <div className="circle circle-2" />
        </div>
    )
}

export default Loader;