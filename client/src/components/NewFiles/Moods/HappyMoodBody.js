import React from "react";
import MoodCards from "../Moods/MoodCards";

function HappyMoodBody(props) {
    return (
        <div className="happyMoodBody col-sm-10
        ">
            <MoodCards mood="happy"></MoodCards>
            
            {props.children}
        </div>
                
    );
}

export default HappyMoodBody;