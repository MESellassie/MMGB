import React from "react";

function Happy(props) {
    return (
        <button className="btn happyMood" button type="button">
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/Untitled.png?raw=true" class="card-img" alt="..." id="MMGBlogo"></img>
            {props.children}
        </button>
    );
}

export default Happy;