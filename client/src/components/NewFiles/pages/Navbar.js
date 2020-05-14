import React from "react";
import { Link, withRouter } from 'react-router-dom'


function Navbar(props) {
    return (

        <nav className="navbar shadow" id="navbar">
            <Link to="/mmgb" className="navbar-brand">
                <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/MMGB.png?raw=true" width="110" height="30" className="d-inline-block align-top navbarLogo" alt=""></img>
                </Link>
            {props.children}
        </nav>
        
    );

}

export default Navbar;