import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Card from "./Card";
import Body from "./Body";
import { render } from "react-dom";
import OmdbAPI from "../../../utils/OmdbAPI";
import deezerAPI from "../../../utils/deezerAPI";
import allTitles from "../pages/allTitles";
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
            .catch(err => console.log("WE HAVE FAILED YOU!"));
    }

    getGame() {
        rawgAPI.getGameData(allTitles.getRandomGame())
            .then(res => {
                let game = res.data;
                this.setState({ game: game.background_image })
            }

            )
    }

    getMusic() {
        deezerAPI.getSongData(allTitles.getRandomSong())
            .then(res => {
                let song = res.data;
                this.setState({ song: song.album.cover_medium })
            })
            .catch(err => console.log(err));
    }


    getBook() {
        BooksAPI.getBookData(allTitles.getRandomBook())
            .then(res => {
                let book = res.data;
                this.setState({ book: book.items[0].volumeInfo.imageLinks.smallThumbnail })
            }
            )
    }


    render() {
        return (
            <Jumbotron>
                <Row>
                    <>
                        <div className="col-sm-2 shadow" id="sidebar">
                            <p className="plug">Plug of the Day</p>
                            <br></br>

                            {/* MUSIC */}
                            <Link to={{
                                pathname: `/musicresults`,
                                state: {
                                    musicImage: this.state.song,
                                }
                            }}>
                                <Card
                                    imageSrc={this.state.song}
                                ></Card>
                            </Link>
                            <br></br>

                            {/* GAME */}
                            <Link to={{
                                pathname: `/gameresults`,
                                state: {
                                    gameImage: this.state.game,
                                }
                            }}>
                                <Card
                                    imageSrc={this.state.game}
                                ></Card>
                            </Link>
                            <br></br>

                            {/* BOOK */}
                            <Link to={{
                                pathname: `/bookresults`,
                                state: {
                                    bookImage: this.state.book,
                                }
                            }}>
                                <Card
                                    imageSrc={this.state.book}
                                ></Card>
                            </Link>
                            <br></br>

                            {/* MOVIE */}
                            <Link to={{
                                pathname: `/results`,
                                state: {
                                    movieTitle: this.state.movieResult.Title,
                                    movieDate: this.state.movieResult.Year,
                                    movieRating: this.state.movieResult.Rated,
                                    movieDescription: this.state.movieResult.Plot,
                                    movieImage: this.state.movieResult.Poster,
                                    movieGenre: this.state.movieResult.Genre,
                                    movieRunTime: this.state.movieResult.Runtime,
                                }
                            }}>
                                <Card
                                    title={this.state.movieResult.Title}
                                    imageSrc={this.state.movieResult.Poster}
                                ></Card>
                            </Link>
                        </div>
                        <Body
                            handlePageChange={this.handlePageChange}
                            page={this.state.page}></Body></>

                </Row>
            </Jumbotron>
        );
    }
}

export default Sidebar;