// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SocialLinks from "../components/SocialLinks";

function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col items-center justify-between flex-grow w-full">
                <Header />
                <Navigation />
                <SocialLinks />
            </div>
        </div>
    );
}

export default Home;