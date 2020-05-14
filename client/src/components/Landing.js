import React, { Component } from 'react'
import Navbar from "./Navbar";

class Landing extends Component {
    render() {
        return (
            <div className="welcomeBackground">
            <Navbar/>
            <div className="container" id="welcomeContainer">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME TO MMGB</h1>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Landing