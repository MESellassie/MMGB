import React from "react";
import Navbar from "../pages/Navbar";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import GloomyMoodBody from "../Moods/GloomyMoodBody";
import Container from "../pages/Container";
import GloomySidebar from "../Moods/GloomySidebar";
import Footer from "../pages/Footer";



function GloomyResults(){

     //make 4 api calls for 

    return (
        <div>
        <Navbar></Navbar>
        <Container>
        <Jumbotron>
            <Row>
                <GloomySidebar></GloomySidebar>
                <GloomyMoodBody></GloomyMoodBody>
            </Row>
        </Jumbotron>
        </Container>
        <Footer></Footer>
        </div>
    );
}

export default GloomyResults;