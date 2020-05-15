import React from "react";

function GloomySidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="gloomyMoodSidebar">
                    <div className="moodSidebarTitle">
                    <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/GLOOMY.png?raw=true" className="moodSidebarImage" alt="GLOOMY"></img> 
                    </div>
                    {props.children}
                </div>
    )
}

export default GloomySidebar;