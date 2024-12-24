import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

function Waste({ name, soundFile, setUrl }) {
    const changeSong = async () => {
        try {
            const audioModule = await import(`../assets/sample_song_files/${soundFile}.wav`);
            setUrl(audioModule.default); // Update the URL in the MusicPlayerPopup
        } catch (error) {
            console.error("Error loading sound file:", error);
        }
    };

    return (
        <div
            className="relative w-[168px] h-[48px]
            flex items-center justify-between
            bg-black text-white tracking-wider
            px-5 border border-white rounded-xl"
        >
            <span className="font-bold truncate">{name}</span>
            <button onClick={changeSong}>
                <FaPlay className="text-white" />
            </button>
        </div>
    );
}

Waste.propTypes = {
    name: PropTypes.string.isRequired,
    soundFile: PropTypes.string.isRequired,
    setUrl: PropTypes.func.isRequired, // Add validation for setUrl
};

export default Waste;
