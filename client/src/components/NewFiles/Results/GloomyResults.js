import React from "react";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import MoodBody from "../Moods/MoodBody";
import Container from "../pages/Container";
import GloomySidebar from "../Moods/GloomySidebar";



function GloomyResults(){
    return (
        <Container>
        <Jumbotron>
            <Row>
                <GloomySidebar></GloomySidebar>
                <MoodBody></MoodBody>
            </Row>
        </Jumbotron>
        </Container>
    );
}

export default GloomyResults;