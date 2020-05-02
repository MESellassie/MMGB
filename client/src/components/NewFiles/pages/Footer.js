import React from "react";

function Footer(props) {
    return (
        <div className="sticky-footer">
            Copyright SuperAwesomeMegaCool!!!! &#169;
            {props.children}
        </div>

    );

}

export default Footer;