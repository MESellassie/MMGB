import React from "react";

function MoodBody(props) {
    return (
        <div className="moodBody col-sm-10">
            
            {props.children}
        </div>
                
    );
}

export default MoodBody