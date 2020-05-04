import React from "react";

function Happy(props) {
    return (
        <button onClick={()=>props.handlePageChange("HappyResults")} className="btn col-sm-3" type="button" id="happyBtn">
            <a href="#happyResults"
                
                >
            </a>
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/HappyMood.png?raw=true" class="card-img" alt="..."></img>
            {props.children}
        </button>

    );
}

export default Happy;