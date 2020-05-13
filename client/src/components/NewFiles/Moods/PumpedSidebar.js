import React from "react";

function PumpedSidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="pumpedMoodSidebar">
                    <div className="moodSidebarTitle">
                    <img src="" className="moodSidebarImage" alt="..."></img> 
                    </div>
                    {props.children}
                </div>
    )
}

export default PumpedSidebar;