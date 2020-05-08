import React from "react";
import Row from "./Row";
import Container from "./Container";
function MoodCard(props) {
  return (
    <>
      <div className="card" id="video" style={{width: 200}}>
        <span className="badge badge-primary">Most Popular</span>
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Sample Video</h5>
          <p className="card-text">1,286,930 views•Jun 2, 2019</p>
        </div>
      </div>
    </>
  );
}
function MoodCards(props) {
  // const data = props.data
  const data = [
    { imgsrc: "https://via.placeholder.com/200", title: "super cool title" },
    { imgsrc: "https://via.placeholder.com/200", title: "super cool title" },
    { imgsrc: "https://via.placeholder.com/200", title: "super cool title" },
    { imgsrc: "https://via.placeholder.com/200", title: "super cool title" },
  ];
  return (
    <div className="moodContainer">
      <div className="movieCardWrapper">
        MOVIES
        <div className="">
          {/* structure item={imgsrc: "", title: ""} structure */}
          {data.map((item, index) => {
            return <MoodCard key={index} {...item} />;
          })}
          {/* <div className="cardResults" id="movieBox1">
            MOVIE 1
          </div>
          <div className="cardResults" id="movieBox2">
            MOVIE 2
          </div>
          <div className="cardResults" id="movieBox3">
            MOVIE 3
          </div>
          <div className="cardResults" id="movieBox4">
            MOVIE 4
          </div> */}
        </div>
      </div>
      <div className="musicCardWrapper">
        MUSIC
        <div className="d-flex justify-content-around musicCardWrapper2">
          <div className="cardResults" id="musicBox1">
            MUSIC 1
          
          </div>
        </div>
      </div>
      <div className="gamesCardWrapper">
        GAMES
        <div className="gamesCardWrapper2">
          <div className="cardResults" id="gamesBox1">
            GAMES 1
          </div>
        </div>
      </div>
      <div className="booksCardWrapper">
        BOOKS
        <div className="booksCardWrapper2">
          <div className="cardResults" id="booksBox1">
            BOOKS 1
        </div>
      </div>
    </div>
  );
}
export default MoodCards;
