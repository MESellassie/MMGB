import React from "react";
import Navbar from "../pages/Navbar";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import RelaxedMoodBody from "../Moods/RelaxedMoodBody";
import Container from "../pages/Container";
import RelaxedSidebar from "../Moods/RelaxedSidebar";
import Footer from "../pages/Footer";



function RelaxedResults(){

     //make 4 api calls for 

    return (
        <div>
        <Navbar></Navbar>
        <Container>
        <Jumbotron>
            <Row>
                <RelaxedSidebar></RelaxedSidebar>
                <RelaxedMoodBody></RelaxedMoodBody>
            </Row>
        </Jumbotron>
        </Container>
        <Footer></Footer>
        </div>
    );
}

export default RelaxedResults;