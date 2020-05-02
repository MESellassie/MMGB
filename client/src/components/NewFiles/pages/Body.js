import React from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Happy from "../Moods/Happy";
import MoodRow from "./MoodRow";
import Gloomy from "../Moods/Gloomy";
import Pumped from "../Moods/Pumped";
import Relaxed from "../Moods/Relaxed";

function Body(props) {
    return (
                <div className="col-sm-10" id="mainBody">
                    <br></br>
                    <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/Untitled.png?raw=true"  class="card-img" alt="..." id="MMGBlogo"></img>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <MoodRow>
                        <Happy></Happy>
                        <Gloomy></Gloomy>
                        <Pumped></Pumped>
                        <Relaxed></Relaxed>
                    </MoodRow>

                {props.children}
                </div>
    );
}

export default Body