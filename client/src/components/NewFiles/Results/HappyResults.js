import React from "react";
import Navbar from "../pages/Navbar";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import HappyMoodBody from "../Moods/HappyMoodBody";
import Container from "../pages/Container";
import HappySidebar from "../Moods/HappySidebar";
import Footer from "../pages/Footer";


function HappyResults(){

    //make 4 api calls for 

    return (
        <div>
        <Navbar></Navbar>
        <Container>
        <Jumbotron>
            <Row>
                <HappySidebar></HappySidebar>
                <HappyMoodBody></HappyMoodBody>
            </Row>
        </Jumbotron>
        </Container>
        <Footer></Footer>
        </div>
    );
}

export default HappyResults;
