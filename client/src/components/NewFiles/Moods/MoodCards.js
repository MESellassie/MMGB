import React, { useEffect, useState } from "react";
import Card from "../pages/Card";


function MoodCards({mood}) {
    //movie state
    const [movieState, setMovieState] = useState({
        responseData: {},
        title: "",
        imageUrl: ""
    })
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

    useEffect(() => {
        //1. use our "mood" prop to determine what mood we should be passing to our api calls

        //2. make our four different api calls
            

        //3. set each of our four states individually based on these API calls (set the appropriate state based on the .then() from any API Call we make)
    }, [])


    return (
        <div className="moodCardContainer container col-md-6 shadow">
            <div className="row row-cols-1 row-cols-md-2">
                <a href="#" className="moodCardLink">
                <div className="col mb-4" id="card1">
                    <div className="card">
                        <img src="" class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">MOVIE</h5>
                            {/* //Link to="/detail" */}
                            <Card imagSrc={movieState.imageUrl} title={movieState.title}/>
                        </div>
                    </div>
                </div>
                </a>

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

    )
}

export default MoodCards;