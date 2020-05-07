import React from "react";

function Relaxed(props) {
    return (
        <button className="btn col-sm-3" type="button" id="relaxedBtn">
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/RelaxedMood.png?raw=true" className="card-img" alt="..."></img>
            {props.children}
        </button>

    );
}

export default Relaxed;