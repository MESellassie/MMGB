import React from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import MoodBody from "./MoodBody";

function MoodSidebar(props){
    return (
        <Jumbotron>
            <Row>
                <div className="col-sm-2 shadow" id="moodSidebar">
                    
                    {props.children}
                </div>
                <MoodBody></MoodBody>
            </Row>
        </Jumbotron>
    )
}

export default MoodSidebar;