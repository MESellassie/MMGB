import React from "react";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import HappyMoodBody from "../Moods/HappyMoodBody";
import Container from "../pages/Container";
import HappySidebar from "../Moods/HappySidebar";


function HappyResults(){

    //make 4 api calls for 

    return (
        <Container>
        <Jumbotron>
            <Row>
                <HappySidebar></HappySidebar>
                <HappyMoodBody></HappyMoodBody>
            </Row>
        </Jumbotron>
        </Container>
    );
}

export default HappyResults;
