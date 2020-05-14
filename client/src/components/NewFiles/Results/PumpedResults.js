import React from "react";
import Navbar from "../pages/Navbar";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import PumpedMoodBody from "../Moods/PumpedMoodBody";
import Container from "../pages/Container";
import PumpedSidebar from "../Moods/PumpedSidebar";
import Footer from "../pages/Footer";


function PumpedResults(){

    //make 4 api calls for 

    return (
        <div>
        <Navbar></Navbar>
        <Container>
        <Jumbotron>
            <Row>
                <PumpedSidebar>
                </PumpedSidebar>
                <PumpedMoodBody>
                </PumpedMoodBody>
            </Row>
        </Jumbotron>
        </Container>
        <Footer></Footer>
        </div>
    );
}

export default PumpedResults;
