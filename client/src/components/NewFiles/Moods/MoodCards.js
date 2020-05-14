import React, { Component, useEffect, useState } from "react";
import Card from "../pages/Card";
import { Link } from "react-router-dom";
import happyMovieTitles from "../pages/happyTitles";



class MoodCards extends Component {

    //movie state
    constructor(props) {
        super(props);
        this.state = {
            mood: "",
        }
    }

    componentDidMount() {
        this.setState({ mood: this.props.mood }, () => {

            if (this.state.mood === "happy") {
                // happyMovieTitles.random()
                console.log(happyMovieTitles.random())
                
    
                console.log(this.props.mood);
                ;
        } 
            
            
        })
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
                    <Link to="/results">
                        <a href="#" className="moodCardLink">
                            <div className="col mb-4" id="card1">
                                <div className="card">
                                    {/* //Link to="/detail" */}
                                    {/* <Card imagSrc={movieState.imageUrl} title={movieState.title}/> */}
                                    <div className="card-body">
                                        <h5 className="card-title">MOVIE</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>

                    <a href="#" className="moodCardLink">
                        <div className="col mb-4" id="card2">
                            <div className="card">
                                <img src="..." class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">MUSIC</h5>
                                    <p className="card-text">info:</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="moodCardLink">
                        <div className="col mb-4" id="card3">
                            <div className="card">
                                <img src="..." class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">GAMES</h5>
                                    <p className="card-text">info:</p>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="#" className="moodCardLink">
                        <div className="col mb-4" id="card4">
                            <div className="card">
                                <img src="..." class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">BOOKS</h5>
                                    <p className="card-text">info:</p>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>

        );
    }

}
<<<<<<< HEAD:client/src/components/NewFiles/pages/MoodCards.js
export default MoodCards;
=======

export default MoodCards;
>>>>>>> 9736eda7043080d831ea1f266d33128f217e60e6:client/src/components/NewFiles/Moods/MoodCards.js
