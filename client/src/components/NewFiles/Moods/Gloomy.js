import React from "react";

function Gloomy(props) {
    return (
        <button className="btn col-sm-3" type="button" id="gloomyBtn">
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/GloomyMood.png?raw=true" class="card-img" alt="..."></img>
            {props.children}
        </button>

    );
}

export default Gloomy;