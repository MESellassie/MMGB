import React from "react";

function ResultsSidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="resultsSidebar">
                    <div className="moodSidebarTitle">
                    <img width="200" height="auto" src="" className="resultsSidebarImage" alt=""></img> 
                    </div>
                    {props.children}
                </div>
    )
}

export default ResultsSidebar;