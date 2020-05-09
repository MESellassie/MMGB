import React from "react";

function ResultsCard(props) {
    return (
        <div className="resultContainer col-sm-12">
            <div className="col-sm-4">
                <img src="" className="resultCardImage" alt="..."></img>
            </div>
            <div className="col-sm-8 resultDescription">
                Lorum ipsum
                <div className="col-sm-6 youTubePlayer">
                    VIDEO GOES HERE
                    <div className="col-sm-4 linkIcons"></div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default ResultsCard;