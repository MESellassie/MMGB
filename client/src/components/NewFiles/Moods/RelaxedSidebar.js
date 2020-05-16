import React from "react";

function RelaxedSidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="relaxedMoodSidebar">
                    <div className="moodSidebarTitle">
                    <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/RELAXED.png?raw=true" className="moodSidebarImage" alt="RELAXED"></img> 
                    </div>
                    {props.children}
                </div>
    )
}

export default RelaxedSidebar;