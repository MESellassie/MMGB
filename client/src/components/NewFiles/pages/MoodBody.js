import React from "react";
import MoodCards from "./MoodCards";

function MoodBody(props) {
    return (
        <div className="moodBody col-sm-12
        ">
            <MoodCards></MoodCards>
            
            {props.children}
        </div>
                
    );
}

export default MoodBody;