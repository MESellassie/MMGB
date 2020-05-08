import React from "react";
import MoodCards from "./MoodCards";

function MoodBody(props) {
    return (
        <div className="moodBody col-sm-10">
            <MoodCards></MoodCards>
            
            {props.children}
        </div>
                
    );
}

export default MoodBody