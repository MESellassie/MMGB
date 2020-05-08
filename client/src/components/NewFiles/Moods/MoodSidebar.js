import React from "react";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import MoodBody from "./MoodBody";
import Container from "../pages/Container";

function MoodSidebar(props){
    return (
        <Container>
        <Jumbotron>
            <Row>
                <div className="col-sm-2 shadow" id="moodSidebar">
                    <div className="moodSidebarTitle">HAPPY</div> 
                    {props.children}
                </div>
                <MoodBody></MoodBody>
            </Row>
        </Jumbotron>
        </Container>
    )
}

export default MoodSidebar;