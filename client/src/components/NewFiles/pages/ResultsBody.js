import React from "react";

function ResultsBody(props) {
    return(
        <div className="resultsBody col-sm-12">
            <ResultsCard>

            </ResultsCard>
            {props.children}
        </div>
    );
}

export default ResultsBody;