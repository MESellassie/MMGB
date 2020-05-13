import React from "react";

function RelaxedSidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="relaxedMoodSidebar">
                    <div className="moodSidebarTitle">
                    <img src="" className="moodSidebarImage" alt="..."></img> 
                    </div>
                    {props.children}
                </div>
    )
}

export default RelaxedSidebar;