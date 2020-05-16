import React, { Component, useEffect, useState } from "react";
import Card from "../pages/Card";
import { Link } from "react-router-dom";
import happyTitles from "../pages/happyTitles";
import gloomyTitles from "../pages/gloomyTitles";
import pumpedTitles from "../pages/pumpedTitles";
import relaxedTitles from "../pages/relaxedTitles";
import OMDBAPI from "../../../utils/OmdbAPI";
import BOOKSAPI from "../../../utils/BooksAPI";
import rawgAPI from "../../../utils/rawgAPI";
import deezerAPI from "../../../utils/deezerAPI";




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
        if (mood === `happy`) {
            moodObject = happyTitles
        } else if (mood === `gloomy`) {
            moodObject = gloomyTitles
        } else if (mood === `pumped`) {
            moodObject = pumpedTitles
        } else moodObject = relaxedTitles;

        // switch (mood) {
        //     case `happy`:
        //         moodObject = happyTitles;
        //     case "gloomy":
        //         moodObject = gloomyTitles;
        //     case "pumped":
        //         moodObject = pumpedTitles;
        //     case "relaxed":
        //         moodObject = relaxedTitles;
        // }
        console.log("getRandomValues:moodObject", moodObject)

        if (moodObject) {
            let movie, game, book, song;
            OMDBAPI.getMovieData(moodObject.getRandomMovie())
                .then(res => {
                    movie = res.data;
                    console.log(movie)


                    return BOOKSAPI.getBookData(moodObject.getRandomBook())
                        .then(res => {
                            book = res.data;
                            console.log(book)                            


                            return rawgAPI.getGameData(moodObject.getRandomGame())
                                .then(res => {
                                    game = res.data;
                                    console.log(game)


                                    return deezerAPI.getSongData(moodObject.getRandomSong())
                                        .then(res => {
                                            song = res.data;
                                            console.log(song)

                                            this.setState({
                                                movie,
                                                book: book.image = book.items[0].volumeInfo.imageLinks.smallThumbnail,
                                                game: game.background_image,
                                                song: song.album.cover_medium,
                                            })
                                            
                                        })

                                })

                        })
                })
                .catch(err => console.log("WE HAVE FAILED YOU!"));
                
        }

    }



    render() {


        return (

            <div className="moodCardContainer container col-md-6 shadow">
                <div className="row row-cols-1 row-cols-md-2">
                    {/* MOVIE */}
                    <Link to={{
                        pathname: `/results`,
                        state: {
                            movieTitle: this.state.movie.Title,
                            movieDate: this.state.movie.Year,
                            movieRating: this.state.movie.Rated,
                            movieDescription: this.state.movie.Plot,
                            movieImage: this.state.movie.Poster,
                            movieGenre: this.state.movie.Genre,
                            movieRunTime: this.state.movie.Runtime,
                        }
                    }}>
                        <div className="col mb-4" id="card1">
                            <h5 className="card-title">MOVIE</h5>
                            <Card
                                title={this.state.movie.Title}
                                imageSrc={this.state.movie.Poster}
                            />
                        </div>
                    </Link>

                    {/* MUSIC */}
                    <Link to={{
                        pathname: `/musicresults`,
                        state: {
                            musicImage: this.state.song,
                        }
                    }}>
                        <div className="col mb-4" id="card2">
                            <h5 className="card-title">MUSIC</h5>
                            <Card
                                imageSrc={this.state.song}
                            />
                        </div>
                    </Link>
                    
                    {/* GAME */}
                    <Link to={{
                        pathname: `/gameresults`,
                        state: {
                            gameImage: this.state.game,
                        }
                    }}>
                        <div className="col mb-4" id="card3">
                            <h5 className="card-title">GAMES</h5>
                            <Card
                                imageSrc={this.state.game}
                            />
                        </div>
                    </Link>

                    {/* BOOK */}
                    <Link to={{
                        pathname: `/bookresults`,
                        state: {
                            bookImage: this.state.book,
                        }
                    }}>
                        <div className="col mb-4" id="card4">
                            <h5 className="card-title">BOOKS</h5>
                            <Card
                                imageSrc= { this.state.book }
                            />
                        </div>
                    </Link>

                </div>
            </div>

        );
    }

}
export default MoodCards;
