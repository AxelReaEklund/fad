import React, { useState } from "react";
import BackButton from "../components/BackButton.jsx";

function Bin() {
    const [keyCode, setKeyCode] = useState("");

    const handleInputChange = (e) => {
        setKeyCode(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            alert(`Key code entered: ${keyCode}`);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-black text-white relative">
            {/* Back Icon */}
            <BackButton to="/" className="absolute top-4 left-4" />

            {/* Header */}
            <h2 className="text-4xl font-bold mt-36 text-center tracking-widest">
                THE BIN
            </h2>

            {/* Key Code Section */}
            <div className="flex flex-col items-center justify-center flex-grow -mt-40 space-y-4">
                {/* Input Box Label */}
                <div className="border border-white px-8 py-3 text-lg tracking-wider cursor-text">
                    ENTER KEYCODE
                </div>

                {/* Dotted Line Input */}
                <input
                    type="text"
                    value={keyCode}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="w-64 text-center bg-transparent text-lg text-white tracking-widest border-none outline-none placeholder-white placeholder-opacity-50"
                    placeholder=".................................."
                />
            </div>
        </div>
    );
}

export default Bin;