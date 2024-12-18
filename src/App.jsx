import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import Bin from "./pages/Bin";
import About from "./pages/About";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
    return (
        <Router>
            <Header />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/bin" element={<Bin />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <SocialLinks />
        </Router>
    );
}

export default App;