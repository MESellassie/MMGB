import React from "react";
import MoodCards from "../Moods/MoodCards";

function GloomyMoodBody(props) {
    return (
        <div className="gloomyMoodBody col-sm-10">
            <MoodCards mood="gloomy"></MoodCards>
            
            {props.children}
        </div>
                
    );
}

export default GloomyMoodBody;