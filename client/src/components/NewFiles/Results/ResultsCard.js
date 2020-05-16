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
                            <div className="col-sm-4">
                                <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/blackPanter.jpg?raw=true" className="resultCardImage" alt="..."></img>
                            </div>
                            <div className="col-sm-8 resultDescription">
                                Lorum ipsum
                <div className="col-sm-6 youTubePlayer">
                                    VIDEO GOES HERE
                    <div className="col-sm-4 linkIcons"></div>
                                </div>
                            </div>
                            {props.children}
                        </div> */}

{<div className="card cardResults">
  {/* <div className="card-header">
  MEDIA TITLE GOES HERE
  </div> */}
  <div className="card-body">
    <h3 className="card-title">Black Panter</h3>
    <p> 2018 ‧ Action/Fantasy ‧ 2h 15m</p>
    <p className="card-text resultDescription">After the death of his father, T’Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T’Challa’s mettle as king — and as Black Panther — gets tested when he’s drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.</p>
    <div className="youTubePlayer">YouTube VIDEO GOES HERE</div>
                    <div className="linkIcons"></div>
    <a href="#" className="btn btn-primary">Go to site</a>
  </div>
</div>}
                    </Row>
                </Jumbotron>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default ResultsCard;