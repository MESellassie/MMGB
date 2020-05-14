import React from "react";
// import Jumbotron from "./Jumbotron";
// import Row from "./Row";
import Happy from "../Moods/Happy";
import MoodRow from "../Moods/MoodRow";
import Gloomy from "../Moods/Gloomy";
import Pumped from "../Moods/Pumped";
import Relaxed from "../Moods/Relaxed";

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state={page:props.page};
    }


    

    render() {
        return (
            <div className="col-sm-10" id="mainBody">
                <br></br>
                {
                    this.state.page === 'home' && <>
                        <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/Untitled.png?raw=true" className="card-img" alt="..." id="MMGBlogo"></img>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <MoodRow>
                            <Happy></Happy>
                            <Gloomy ></Gloomy>
                            <Pumped></Pumped>
                            <Relaxed></Relaxed>
                        </MoodRow>
                    </> 

                }

                {this.props.children}
            </div>
        );
    }
}

export default Body
