import React from "react";

function Pumped(props) {
    return (
        <button className="btn col-sm-3" type="button" id="pumpedBtn">
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/PumpedMood.png?raw=true" className="card-img" alt="..."></img>
            {props.children}
        </button>

    );
}

export default Pumped;