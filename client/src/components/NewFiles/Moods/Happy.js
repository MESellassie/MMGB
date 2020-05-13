import React from "react";
import { Link } from "react-router-dom";
function Happy(props) {
    return (
        <Link to="/happy">
        <button className="btn col-sm-3" type="button" id="happyBtn">
            <a href="#happyResults">
            </a>
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/HappyMood.png?raw=true" className="card-img" alt="..."></img>
            {props.children}
        </button>
        </Link>

    );
}

export default Happy;
