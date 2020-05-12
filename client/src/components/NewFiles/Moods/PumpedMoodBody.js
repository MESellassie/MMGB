import React from "react";
import MoodCards from "../Moods/MoodCards";

function PumpedMoodBody(props) {
    return (
        <div className="pumpedMoodBody col-sm-10
        ">
            <MoodCards mood="pumped"></MoodCards>
            
            {props.children}
        </div>
                
    );
}

export default PumpedMoodBody;