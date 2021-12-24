import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles.scss";
import Navbar from "../Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div>App component</div>
        </BrowserRouter>
    );
};

export default App;