import React from "react";

function Navbar(props) {
    return (

        <nav className="navbar shadow" id="navbar">
            <a class="navbar-brand" href="#">
                <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/MMGB.png?raw=true" width="110" height="30" class="d-inline-block align-top" alt=""></img>
            </a>
            {props.children}
        </nav>
        
    );

}

export default Navbar;