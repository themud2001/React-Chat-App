import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "../Auth";
import Navbar from "../Navbar";
import Landing from "../Landing";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Chat from "../Chat";

const App = () => {
    return (
        <BrowserRouter>
            <Auth />
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;