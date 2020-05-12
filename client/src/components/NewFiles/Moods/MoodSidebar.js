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
                    <div className="moodSidebarTitle">
                    <img src="" className="https://files.slack.com/files-pri/TQ8JS4T32-F012WCNEH9V/happy.png" alt="..."></img> 
                    </div>
                    {props.children}
                </div>
                <MoodBody></MoodBody>
            </Row>
        </Jumbotron>
        </Container>
    )
}

export default MoodSidebar;