import React from "react";
import Container from "../Container";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import "../Main/style.css";


function MMGB() {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Sidebar></Sidebar>
            </Container>
            <Footer></Footer>
        </div>
    );

}

export default MMGB;