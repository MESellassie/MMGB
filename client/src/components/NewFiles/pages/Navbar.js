import React from "react";

function Navbar(props) {
    return (

        <nav className="navbar shadow" id="navbar">
            <a className="navbar-brand" href="#">
                <img src="https://github.com/MESellassie/MMGB/blob/master/client/public/images/MMGB.png?raw=true" width="110" height="30" className="d-inline-block align-top" alt=""></img>
            </a>
            {/* <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Sign Up!
                    </a>
                </li>
                <p className="navBreak">|</p>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Login
                    </a>
                </li>
            </ul> */}
            {props.children}
        </nav>
        
    );

}

export default Navbar;