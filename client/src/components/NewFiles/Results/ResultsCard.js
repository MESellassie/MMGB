import React from "react";
import Navbar from "../pages/Navbar";
import Container from "../pages/Container";
import Jumbotron from "../pages/Jumbotron";
import Row from "../pages/Row";
import Footer from "../pages/Footer";
import ResultsSidebar from "../Results/ResultsSidebar";

function ResultsCard(props) {


    const movieResultTitle = props.location.state.movieTitle;
    const movieResultDate = props.location.state.movieDate;
    const movieResultRating = props.location.state.movieRating;
    const movieResultDescription = props.location.state.movieDescription;
    const movieResultImage = props.location.state.movieImage;
    const movieResultGenre = props.location.state.movieGenre;
    const movieResultRunTime = props.location.state.movieRunTime;

    const musicResultImage = props.location.state.musicImage;
    const gameResultImage = props.location.state.gameImage;
    const bookResultImage = props.location.state.bookImage;



function ResultsCard(props) {


                        <div className="card cardResults">
                            <div className="card-body">
                                <Row>
                                    <div className="col-sm-4">
                                        <img src={movieResultImage} className="resultCardImage" alt="POSTER"></img>
                                    </div>
                                    <div className="col-sm-8">
                                        <h3 className="resultsCardTitle">{movieResultTitle}</h3>
                                        <br />
                                        <p className="rating font-weight-lighter"> {movieResultRating}</p>
                                        <br />
                                        <p className="resultsBasicInfo font-weight-lighter">{movieResultDate} ‧ {movieResultGenre} ‧ {movieResultRunTime}</p>
                                        <br/>
                                        <p className="card-text resultDescription">{movieResultDescription}</p>
                                        <br/>
                                        <div className="">{movieResultTitle} Trailer</div>
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
export default ResultsCard;