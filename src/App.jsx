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
            <div className="relative">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50">
                                <Home />
                            </div>
                        }
                    />
                    <Route
                        path="/portfolio"
                        element={
                            <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50">
                                <Portfolio />
                            </div>
                        }
                    />
                    <Route
                        path="/bin"
                        element={
                            <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50">
                                <Bin />
                            </div>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50">
                                <About />
                            </div>
                        }
                    />
                </Routes>
            </div>
            <SocialLinks />
        </Router>
    );
}

export default App;
