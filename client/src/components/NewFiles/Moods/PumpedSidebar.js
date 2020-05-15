import React from "react";

function PumpedSidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="pumpedMoodSidebar">
                    <div className="moodSidebarTitle">
                    <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/PUMPED.png?raw=true" className="moodSidebarImage" alt="PUMPED"></img> 
                    </div>
                    {props.children}
                </div>
    )
}

export default PumpedSidebar;