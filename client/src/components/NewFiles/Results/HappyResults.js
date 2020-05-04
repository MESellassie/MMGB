import React from "react";
import Navbar from "../pages/Navbar";
import Container from "../pages/Container";
import MoodSidebar from "../pages/MoodSidebar";
import Footer from "../pages/Footer";


function HappyResults(){
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <MoodSidebar></MoodSidebar>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default HappyResults;
