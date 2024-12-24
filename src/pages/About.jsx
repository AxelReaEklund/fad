import { useState } from "react";
import PersonStanding from "../assets/person_standing.svg";
import BackButton from "../components/BackButton.jsx"; // Import the SVG

function About() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-background text-white px-6 py-10">

            {/* Back Icon */}
            <BackButton to="/"/>

            {/* Header */}
            <h1 className="text-5xl font-bold tracking-wide text-center mt-10">ABOUT</h1>

            {/* Image/Illustration */}
            <div className="mt-16 mb-8">
                <img src={PersonStanding} alt="Person Standing" className="h-64 w-auto"/>
            </div>

            {/* Description */}
            <p className="text-lg text-center tracking-wide">
                22 y/o music creator from Stockholm, Sweden
            </p>

            {/* Subscribe Button */}
            <button
                onClick={togglePopup}
                className="mb-20 mt-10 px-6 py-2 border border-white uppercase text-sm tracking-widest relative overflow-hidden group"
            >
                <span className="absolute inset-0 bg-white transition-transform transform scale-x-0 origin-center group-hover:scale-x-100 duration-250 ease-out"></span>
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500 ease-out">Subscribe to Newsletter</span>
            </button>


            {/* Popup */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="bg-white text-black rounded-lg p-6 w-96 relative">
                        {/* Close Button */}
                        <button
                            onClick={togglePopup}
                            className="absolute top-4 right-4 text-black font-bold text-lg"
                        >
                            &times;
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Newsletter</h2>

                        {/* Form */}
                        <form className="flex flex-col space-y-4">
                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                            />

                            {/* Country */}
                            <input
                                type="text"
                                placeholder="Enter your country"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                            />

                            {/* Phone Number */}
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
