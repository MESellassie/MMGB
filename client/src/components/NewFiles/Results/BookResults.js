import React from "react";
import Navbar from "../pages/Navbar";
import Container from "../pages/Container";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import Footer from "../pages/Footer";
import ResultsSidebar from "../Results/ResultsSidebar";


function BookResultsCard(props) {


    const musicResultImage = props.location.state.musicImage;
    const gameResultImage = props.location.state.gameImage;
    const bookResultImage = props.location.state.bookImage;


    return (

        <div>
            <Navbar></Navbar>
            <Container>
                <Jumbotron>
                    <Row>
                        <ResultsSidebar></ResultsSidebar>

                        <div className="card cardResults">
                            <div className="card-body">
                                <Row>
                                    <div className="col-sm-4">
                                        <img src={bookResultImage} className="resultCardImage" alt="POSTER"></img>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="resultsCardTitle"></h3>
                                        <br />
                                        <p className="rating font-weight-lighter"></p>
                                        <br />
                                        <p className="resultsBasicInfo font-weight-lighter"></p>
                                        <br/>
                                        <p className="card-text resultDescription"></p>
                                        <br/>
                                        <div className=""> Trailer</div>
                                <iframe className="youTubePlayer" src="https://www.youtube.com/embed/xjDjIWPwcPU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <div className="linkIcons"></div>
                                <a href="https://www.marvel.com/movies/black-panther" target="new" className="btn btn-primary">Go to site</a>

                                    </div>
                                </Row>
                                
                            </div>

                        </div>
                    </Row>
                </Jumbotron>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default BookResultsCard;