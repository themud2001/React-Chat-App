import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);