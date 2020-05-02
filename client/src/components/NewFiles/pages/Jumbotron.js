import React from "react";

function Jumbotron(props) {
    return (

        <div className="jumbotron-fluid">
            {props.children}
        </div>

    );

}

export default Jumbotron;