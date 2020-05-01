import React from "react";

function Card(props) {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <h5 className="card-title">Mood</h5>
                </div>
                <div className="col-md-8">
                    <div className="Card-body">
                    <img src="..." class="card-img" alt="..."></img>  
                    </div>
                </div>
            </div>
                {props.children}
        </div>
    );

}

export default Card;
