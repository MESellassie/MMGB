import React from "react";
import Navbar from "../pages/Navbar";
import Container from "../pages/Container";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import Footer from "../pages/Footer";
import ResultsSidebar from "../Results/ResultsSidebar";

function ResultsCard(props) {
    const movieResultTitle= props.location.state.movieTitle;

    console.log(props.location.state.movieTitle)
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Jumbotron>
                    <Row>
                        <ResultsSidebar></ResultsSidebar>
                        <div className="resultContainer col-sm-10">
                            <div className="title">
                                {movieResultTitle}
                            </div>
                            <div className="col-sm-4">
                                <img src="" className="resultCardImage" alt="..."></img>
                            </div>
                            <div className="col-sm-8 resultDescription">
                                Lorum ipsum
                <div className="col-sm-6 youTubePlayer">
                                    VIDEO GOES HERE
                    <div className="col-sm-4 linkIcons"></div>
                                </div>
                            </div>
                            {props.children}
                        </div>

                    </Row>
                </Jumbotron>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default ResultsCard;