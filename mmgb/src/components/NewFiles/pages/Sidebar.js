import React from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Card from "./Card";

function Sidebar(props) {
    return (
        <Jumbotron>
            <Row>
                <div className="col-sm-2 shadow" id="sidebar">
                    <p className="plug">Plug of the Day</p>
                    <Card></Card>
                    <br></br>
                    <Card></Card>
                    {props.children}
                </div>
            </Row>
        </Jumbotron>
    );

}

export default Sidebar;