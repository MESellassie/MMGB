import React from "react";

function GloomySidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="gloomyMoodSidebar">
                    <div className="moodSidebarTitle">
                    <img src="" className="moodSidebarImage" alt="..."></img> 
                    </div>
                    {props.children}
                </div>
    )
}

export default GloomySidebar;