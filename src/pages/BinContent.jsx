import { useState } from "react";
import BackButton from "../components/BackButton.jsx";
import Waste from "../components/Waste.jsx";
import MusicPlayerPopup from "../components/MusicPlayerPopup.jsx";

// Dynamically import all files in the directory
const soundFiles = import.meta.glob("../assets/sample_song_files/*.wav");

function BinContent() {
    // State to hold the currently playing URL
    const [url, setUrl] = useState(null);

    // Extract file names (without the path or extension)
    const soundFileNames = Object.keys(soundFiles).map((path) =>
        path.replace("../assets/sample_song_files/", "").replace(".wav", "")
    );

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-white">
            <BackButton to="/" />
            <div
                className="
                    w-[80vw]
                    flex flex-wrap items-start justify-center
                    gap-x-4"
            >
                {soundFileNames.map((fileName, index) => (
                    <div
                        key={index}
                        className="
                            w-[168px] h-[48px]
                            flex items-center justify-between
                            flex-grow-0
                            my-2"
                    >
                        {/* Pass setUrl to Waste */}
                        <Waste
                            name={`WASTE${String(index + 1).padStart(3, "0")}`}
                            soundFile={fileName}
                            setUrl={setUrl}
                        />
                    </div>
                ))}
            </div>

            {/* Music Player */}
            <div className="absolute mx-auto bottom-10">
                <MusicPlayerPopup url={url} />
            </div>
        </div>
    );
}

export default BinContent;
