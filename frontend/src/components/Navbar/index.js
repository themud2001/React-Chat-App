import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.scss";

const Navbar = ({ token }) => {
    return ReactDOM.createPortal(
        <>
            <Link className="logo" to="/">Talky</Link>

            {!token &&
                <ul className="nav-links">
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            }
        </>,
        document.querySelector(".navbar")
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        user: state.auth.user
    };
};

export default connect(mapStateToProps)(Navbar);