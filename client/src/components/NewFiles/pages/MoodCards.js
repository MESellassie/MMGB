import React from "react";
import Row from "./Row";
import Container from "./Container";

function MoodCards() {
    return (
        <div className="moodContainer">
            <div className="movieCardWrapper">MOVIES
                <div className="movieBox1">MOVIE 1</div>
                <div className="movieBox2">MOVIE 2</div>
                <div className="movieBox3">MOVIE 3</div>
                <div className="movieBox4">MOVIE 4</div>
            </div>

            <div className="musicCardWrapper">MUSIC
                <div className="musicBox1">MUSIC 1</div>
                <div className="musicBox2">MUSIC 2</div>
                <div className="musicBox3">MUSIC 3</div>
                <div className="musicBox4">MUSIC 4</div>
            </div>

            <div className="gamesCardWrapper">GAMES
                <div className="gamesBox1">GAMES 1</div>
                <div className="gamesBox2">GAMES 2</div>
                <div className="gamesBox3">GAMES 3</div>
                <div className="gamesBox4">GAMES 4</div>
            </div>

            <div className="booksCardWrapper">BOOKS
                <div className="booksBox1">BOOKS 1</div>
                <div className="booksBox2">BOOKS 2</div>
                <div className="booksBox3">BOOKS 3</div>
                <div className="booksBox4">BOOKS 4</div>
                <div className="booksBox4">BOOKS 4</div>

            </div>
        </div>
    )
}

export default MoodCards