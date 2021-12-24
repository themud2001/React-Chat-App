import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./styles.scss";

const Navbar = () => {
    return ReactDOM.createPortal(
        <>
            <Link className="logo" to="/">Talky</Link>

            <ul className="nav-links">
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </>,
        document.querySelector(".navbar")
    );
};

export default Navbar;