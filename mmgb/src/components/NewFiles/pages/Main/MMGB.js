import React from "react";
import Container from "../Container";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "../Main/style.css";

function MMGB() {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Sidebar></Sidebar>
            </Container>
        </div>
    );

}

export default MMGB;