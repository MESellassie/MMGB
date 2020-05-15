import React from "react";

function ResultsSidebar(props) {
    return (
        <div className="col-sm-2 shadow" id="resultsSidebar">
                    <div className="moodSidebarTitle">
                    {/* <img src="" className="moodSidebarImage" alt="..."></img>  */}
                    <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/blackPanther.png?raw=true" className="resultCardImage" alt="POSTER"></img>

                    </div>
                    {props.children}
                </div>
    )
}

export default ResultsSidebar;