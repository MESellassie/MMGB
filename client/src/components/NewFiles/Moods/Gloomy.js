import React from "react";

function Gloomy(props) {
    return (
        <button onClick={()=>props.handlePageChange("GloomyResults")} className="btn col-sm-3" type="button" id="gloomyBtn">
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/GloomyMood.png?raw=true" className="card-img" alt="..."></img>
            {props.children}
        </button>

    );
}

export default Gloomy;