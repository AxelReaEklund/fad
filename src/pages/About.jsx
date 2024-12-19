import React from "react";
import PersonStanding from "../assets/person_standing.svg";
import BackButton from "../components/BackButton.jsx"; // Import the SVG image

function About() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-black text-white px-6 py-10">

            {/* Back Icon */}
            <BackButton to="/" />

            {/* Header */}
            <h1 className="text-5xl font-bold tracking-wide text-center mt-10">ABOUT</h1>

            {/* Image/Illustration */}
            <div className="mt-16 mb-8">
                <img
                    src={PersonStanding}
                    alt="Person Standing"
                    className="h-80 w-auto" // Adjust the size here
                />
            </div>

            {/* Description */}
            <p className="text-lg text-center tracking-wide">
                22 y/o music creator from Stockholm, Sweden
            </p>

            {/* Button */}
            <button className="mt-10 mb-20 px-6 py-2 border border-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all">
                Subscribe to Newsletter
            </button>
        </div>
    );
}

export default About;
