import React from "react";

function Happy(props) {
    return (
        <button className="btn col-sm-3" type="button" id="happyBtn">
            <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/HappyMood.png?raw=true" className="card-img" alt="..."></img>

       <button onClick={()=>props.handlePageChange("HappyResults")} className="btn col-sm-3" type="button" id="happyBtn">
            <a href="#happyResults"
                
                >
            </a>
            {props.children}
        </button>

    );
}

export default Happy;