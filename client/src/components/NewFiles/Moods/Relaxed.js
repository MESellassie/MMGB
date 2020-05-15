import React from "react";
import { Link } from "react-router-dom";


function Relaxed(props) {
    return (
        <Link to="/relaxed">
        <button className="btn col-sm-3" type="button" id="relaxedBtn">
            {/* <a href="#relaxedResults"></a> */}
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/RelaxedMood.png?raw=true" className="card-img" alt="..."></img>
            {props.children}
        </button>
        </Link>

    );
}

export default Relaxed;