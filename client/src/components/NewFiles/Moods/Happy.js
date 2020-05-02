import React from "react";

function Happy(props) {
    return (
        <button className="btn col-sm-3" type="button" id="happyBtn">
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/HappyMood.png?raw=true" class="card-img" alt="..."></img>
            {props.children}
        </button>

    );
}

export default Happy;