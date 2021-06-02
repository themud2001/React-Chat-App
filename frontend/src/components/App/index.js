import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../../history";
import Navbar from "../Navbar";
import Landing from "../Landing";
import LogIn from "../LogIn";

const App = () => {
    return (
        <Router history={history}>
            <Navbar />
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={LogIn} />
        </Router>
    );
};

export default App;