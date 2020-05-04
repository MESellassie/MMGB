import React, { Component } from "react";
import Navbar from "../pages/Navbar";
import Jumbotron from "../pages/Jumbotron";
import MoodBody from "../pages/MoodBody";
import MoodSidebar from "../pages/MoodSidebar";
import MMGB from "../pages/Main/MMGB";

class MoodResults extends Component {
    state = {
        currentPage: "MMGB"
    };

    handlePageChange =  page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "MMGB") {
            return <MMGB />;
        } else if (this.state.currentPage === "Happy") {
            return <Happy />;
        }
    };

    
}

export default MoodResults;


