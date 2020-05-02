import React from "react";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Happy from "../Moods/Happy";

function Body(props) {
    return (
                <div className="col-sm-10" id="mainBody">
                    <br></br>
                    <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/Untitled.png?raw=true" class="card-img" alt="..." id="MMGBlogo"></img>  
                    <Row>
                        <Happy></Happy>
                    </Row>

                {props.children}
                </div>
    );
}

export default Body