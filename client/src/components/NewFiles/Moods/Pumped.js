import React from "react";
import { Link } from "react-router-dom";

function Pumped(props) {
    return (
        <Link to="/pumped">
        <button className="btn col-sm-3" type="button" id="pumpedBtn">
            {/* <a href="#pumpedResults"> </a> */}
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/PumpedMood.png?raw=true" className="card-img" alt="..."></img>
            {props.children}
        </button>
        </Link>

    );
}

export default Pumped;