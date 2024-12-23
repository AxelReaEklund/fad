import { FaPlay } from "react-icons/fa"; // Importing play icon
import PropTypes from "prop-types";
import sampleSound from "../assets/sample_song_files/CantinaBand60.wav"; // Import the sound file

function Waste({ name }) {
    const playSound = () => {
        const audio = new Audio(sampleSound);
        audio.play();
    };

    return (
        <div className="h-fit w-fit flex items-center space-x-2 bg-black text-white px-4 py-2 border border-white">
            <span className="font-bold">{name}</span>
            <button onClick={playSound}>
                <FaPlay className="text-white" />
            </button>
        </div>
    );
}

// Add prop-types validation
Waste.propTypes = {
    name: PropTypes.string.isRequired, // Ensure 'txt' is a required string
};

export default Waste;