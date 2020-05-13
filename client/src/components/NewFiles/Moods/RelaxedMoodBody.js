import React from "react";
import MoodCards from "../Moods/MoodCards";

function RelaxedMoodBody(props) {
    return (
        <div className="relaxedMoodBody col-sm-10">
            <MoodCards mood="relaxed"></MoodCards>
            
            {props.children}
        </div>
                
    );
}

export default RelaxedMoodBody;