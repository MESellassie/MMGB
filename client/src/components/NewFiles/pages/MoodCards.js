import React from "react";
import Row from "./Row";
import Container from "./Container";
function MoodCards() {
    return (
    <div className="moodContainer">
        <div className="movieCardWrapper">MOVIES
            <div className="movieCardWrapper2">
                <div className="cardResults" id="movieBox1">MOVIE 1</div>
                <div className="cardResults" id="movieBox2">MOVIE 2</div>
                <div className="cardResults" id="movieBox3">MOVIE 3</div>
                <div className="cardResults" id="movieBox4">MOVIE 4</div>
            </div>
        </div>
        <div className="musicCardWrapper">MUSIC
            <div className="musicCardWrapper2">
                <div className="cardResults" id="musicBox1">MUSIC 1</div>
                <div className="cardResults" id="musicBox2">MUSIC 2</div>
                <div className="cardResults" id="musicBox3">MUSIC 3</div>
                <div className="cardResults" id="musicBox4">MUSIC 4</div>
            </div>
        </div>
        <div className="gamesCardWrapper">GAMES
            <div className="gamesCardWrapper2">
                <div className="cardResults" id="gamesBox1">GAMES 1</div>
                <div className="cardResults" id="gamesBox2">GAMES 2</div>
                <div className="cardResults" id="gamesBox3">GAMES 3</div>
                <div className="cardResults" id="gamesBox4">GAMES 4</div>
            </div>
        </div>
        <div className="booksCardWrapper">BOOKS
            <div className="booksCardWrapper2">
                <div className="cardResults" id="booksBox1">BOOKS 1</div>
                <div className="cardResults" id="booksBox2">BOOKS 2</div>
                <div className="cardResults" id="booksBox3">BOOKS 3</div>
                <div className="cardResults" id="booksBox4">BOOKS 4</div>
            </div>
        </div>
    </div>
    )
}
export default MoodCards