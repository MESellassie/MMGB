import React from "react";

function Card(props) {
    return (
        <div className="card mb-3" id="cardMood">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <h5 className="card-title">""</h5>
                </div>
                <div className="col-md-8" id="cardImg">
                    <div className="Card-body">
                    <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/BlankImageBox.png?raw=true" className="card-img" alt="..."></img>  
                    </div>
                </div>
            </div>
                {props.children}
        </div>
    );

}

export default Card;
