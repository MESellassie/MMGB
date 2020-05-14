import React from "react";
import { Link } from "react-router-dom";

function Gloomy(props) {
    return (
        <Link to="/gloomy">
        <button className="btn col-sm-3" type="button" id="gloomyBtn">
            {/* <a href="#gloomyResults"></a> */}
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/GloomyMood.png?raw=true" className="card-img" alt="..."></img>
            {props.children}
        </button>
        </Link>

    );
}

export default Gloomy;