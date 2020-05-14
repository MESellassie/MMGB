import React from "react";

function Card(props) {
    return (
        <div className="card mb-3" id="cardMood">
            <div className="row no-gutters">
                {/* <div className="col-md-4">
                    <h5 className="card-title">{props.title}</h5>
                </div> */}
                <div className="col-md-12" id="cardImg">
                    <div className="Card-body">
                    <img src={props.imageSrc} className="card-img" alt="..."></img>  
                    </div>
                </div>
            </div>
                {props.children}
        </div>
    );

}

export default Card;
