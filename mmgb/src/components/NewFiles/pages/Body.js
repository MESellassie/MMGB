import React from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";

function Body(props) {
    return (
                <div className="col-sm-10" id="mainBody">
                    Place the body info logo, etc. here !
                {props.children}
                </div>
    );
}

export default Body