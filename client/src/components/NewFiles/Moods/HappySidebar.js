import React from "react";

function HappySidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="happyMoodSidebar">
                    <div className="moodSidebarTitle">
                    <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/HAPPY.png?raw=true" className="moodSidebarImage" alt="HAPPY"></img> 
                    </div>
                    {props.children}
                </div>
    )
}

export default HappySidebar;