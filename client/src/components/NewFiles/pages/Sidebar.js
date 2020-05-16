import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Card from "./Card";
import Body from "./Body";
import { render } from "react-dom";
import OmdbAPI from "../../../utils/OmdbAPI";
import deezerAPI from "../../../utils/deezerAPI";
import HappyResults from "../Results/HappyResults";
import rawgAPI from "../../../utils/rawgAPI";
import BooksAPI from "../../../utils/BooksAPI";
import happyTitles from "../pages/happyTitles";
import { Link } from "react-router-dom";

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieResult: {},
            bookResult: {},
            gameResult: {},
            musicResult: {},
            page: "home",
            book: {}

        };
    }

    componentDidMount() {
        this.getMovie();
        this.getGame();
        this.getBook();
        this.getMusic();
    }

    getMovie() {
        OmdbAPI.random()
            .then(res => {

                if (res.data.Response == "False" ||
                    (res.data.Language && !res.data.Language.toUpperCase().includes("ENGLISH"))) {
                    this.getMovie();
                }
                else {
                    this.setState({ movieResult: res.data });
                }
            })
            .catch(err => console.log(err));
    }

    getGame() {
        rawgAPI.getGameData(happyTitles.getRandomGame())
        // rawgAPI.random()
            .then(res => {
                let game = res.data;

                this.setState({game: game.background_image})

                // if (res.data.Response == "False") {
                //     this.getGame();
                // }
                // else {
                //     console.log(game.background_image)
                //     this.setState({ game:game.background_image })
                // }
            }

            )
    }

    getMusic() {
        deezerAPI.getSongData(happyTitles.getRandomSong())
            .then(res => {
                let song = res.data;
                console.log("HERE IS THE SONG INFO!!!!")
                console.log(song)
 
                this.setState({ song: song.album.cover_medium})
            })
            .catch(err => console.log(err));
    }


    getBook() {
        BooksAPI.getBookData(happyTitles.getRandomBook())
            .then(res => {
                let book = res.data;
                console.log(book);
                
                    this.setState({ book: book.items[0].volumeInfo.imageLinks.smallThumbnail })
                }
            )
    }


    render() {
        return (
            <Jumbotron>
                <Row>
                    {/* {this.state.page === 'home' && */}
                    <>
                        <div className="col-sm-2 shadow" id="sidebar">
                            <p className="plug">Plug of the Day</p>
                            <br></br>
                            <Link to={{
                                pathname: `/results`,
                                state: {
                                    songTitle: this.state.movieResult.Title,
                                    songImage: this.state.movieResult.Poster,
                                }
                            }}
                            >
                            <Card
                                imageSrc={this.state.song}
                            ></Card>
                            </Link>
                            <br></br>
                            <Card
                                imageSrc={this.state.game}
                            ></Card>
                            <br></br>
                            <Card
                                imageSrc={this.state.book}
                            ></Card>
                            <br></br>

                            <Link to={{
                                pathname: `/results`,
                                state: {
                                    movieTitle: this.state.movieResult.Title,
                                    movieImage: this.state.movieResult.Poster,
                                }
                            }}
                            >
                                <Card
                                    title={this.state.movieResult.Title}
                                    imageSrc={this.state.movieResult.Poster}
                                ></Card>
                            </Link>
                        </div>
                        <Body
                            handlePageChange={this.handlePageChange}
                            page={this.state.page}></Body></>

                    {/* } */}
                </Row>
            </Jumbotron>
        );
    }
}

export default Sidebar;