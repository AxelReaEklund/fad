import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import Bin from "./pages/Bin";
import About from "./pages/About";
import SocialLinks from "./components/SocialLinks.jsx";

function App() {
    return (
        <Router>
            {/* Main App Container */}
            <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800">

                {/* Header Section */}
                <Header />

                {/* Navigation Section */}
                <Navigation />

                {/* Dynamic Page Content */}
                <div className="flex-grow w-full px-6 max-w-screen-md">
                    <Routes>
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/bin" element={<Bin />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>

                {/* Footer Section */}
                <SocialLinks />
            </div>
        </Router>
    );
}

export default App;