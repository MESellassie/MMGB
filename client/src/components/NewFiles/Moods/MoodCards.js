import React, { Component, useEffect, useState } from "react";
import Card from "../pages/Card";
import { Link } from "react-router-dom";
import happyTitles from "../pages/happyTitles";
import OMDBAPI from "../../../utils/OmdbAPI";
import BOOKSAPI from "../../../utils/BooksAPI";
import rawgAPI from "../../../utils/rawgAPI";
// import IGDAPI from "../../../utils/igdbAPI";
// import MUSICAPI from "../../../utils/spodifyAPI";
// import axios from "axios";



class MoodCards extends Component {

    //movie state
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            game: {},
            song: {},
            book: {}
        }
    }

    componentDidMount() {
        this.getRandomValues(this.props.mood);
    }

    getRandomValues(mood) {
        console.log("getRandomValues:mood", mood)
        let moodObject;
        switch (mood) {
            case "happy":
                moodObject = happyTitles;
            case "gloomy":
            // moodObject = gloomyTitles;
            case "pumped":
            // moodObject = pumpedTitles;
            case "relaxed":
            //moodObject = relaxedTitles;
        }
        console.log("getRandomValuess:moodObject", moodObject)
        // //TEST: DELETE ME WHEN ALL FUNCTIONS ARE DEFINED
        // if (moodObject) {

        //     OMDBAPI.getMovieData(moodObject.getRandomMovie())
        //        .then(res => {
        //            this.setState({movie: res.data})
        //            console.log({movie: res.data})
        //        })
        // }
        // //END TEST

        //UNCOMMENT THIS WHEN WE HAVE ALL OF OUR FUNCTIONS DEFINED
        if (moodObject) {
            let movie, game, book, song;
            OMDBAPI.getMovieData(moodObject.getRandomMovie())
                .then(res => {
                    movie = res.data;
                    console.log(movie);

                    return BOOKSAPI.getBookData(moodObject.getRandomBook())
                        .then(res => {
                            book = res.data;
                            console.log(book);
                            // Title
                            console.log(book.items[0].volumeInfo.title);
                            // I know this is giving me the thumbnail
                            console.log(book.items[0].volumeInfo.imageLinks.smallThumbnail)

                            return rawgAPI.getGameData(moodObject.getRandomGame())
                                .then(res => {
                                    game = res.data;
                                    console.log("HERE!!!!!!!!!")
                                    console.log(game)
                                    console.log(game.background_image)
                                    //     return MUSICAPI.getMusicData(moodObject.getRandomSong())
                                    //     .then(res => {
                                    //         song = res.data;
                                    //         // this.setState({
                                    //         //     movie, 
                                    //         //     book,
                                    //         //     game,
                                    //         //     song
                                    //         // })
                                    //     })
                                    // })

                                    this.setState({
                                        movie,
                                        book: book.image = book.items[0].volumeInfo.imageLinks.smallThumbnail,
                                        game: game.background_image,
                                        song
                                    })

                                })

                        })
                })
                .catch(err => console.log(err));

        }

    }

    // const [movieState, setMovieState] = useState({
    //     responseData: {},
    //     title: "",
    //     imageUrl: ""
    // })

    //music state
    // const [movieState, setMovieState] = useState({
    //     responseData: {},
    //     title: "",
    //     imageUrl: ""
    // })
    //game state
    // const [movieState, setMovieState] = useState({
    //     responseData: {},
    //     title: "",
    //     imageUrl: ""
    // })
    //book state
    // const [movieState, setMovieState] = useState({
    //     responseData: {},
    //     title: "",
    //     imageUrl: ""
    // })

    // useEffect(() => {
    //1. use our "mood" prop to determine what mood we should be passing to our api calls

    //2. make our four different api calls


    //3. set each of our four states individually based on these API calls (set the appropriate state based on the .then() from any API Call we make)
    // }, [])

    render() {


        return (

            // Happy MoodCard
            <div className="moodCardContainer container col-md-6 shadow">
                <div className="row row-cols-1 row-cols-md-2">
                    <Link to={{
                        pathname: `/results`,
                        state: {
                            movieTitle: this.state.movie.Title,
                            movieImage: this.state.movie.Poster,
                        }
                    }}
                    >
                        <div className="col mb-4" id="card1">
                            <h5 className="card-title">MOVIE</h5>
                            <Card
                                title={this.state.movie.Title}
                                imageSrc={this.state.movie.Poster}
                            />
                        </div>
                    </Link>

                    <Link to="/results">
                        <div className="col mb-4" id="card2">
                            <h5 className="card-title">MUSIC</h5>

                        </div>
                    </Link>

                    <Link to="/results">
                        <div className="col mb-4" id="card3">
                            <h5 className="card-title">GAMES</h5>
                            <Card
                                imageSrc={this.state.game}
                            />
                        </div>
                    </Link>

                    <Link to="/results">
                        <div className="col mb-4" id="card4">
                            <h5 className="card-title">BOOKS</h5>
                            <Card
                                title={this.state.book}
                                imageSrc={this.state.book}
                            />
                        </div>
                    </Link>

                </div>
            </div>

        );
    }

}
export default MoodCards;
