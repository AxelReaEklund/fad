import PropTypes from "prop-types";
import ReactPlayer from "react-player";

function MusicPlayerPopup({ url }) {
    return (
        <div className="w-[450px] bg-background p-4 rounded-lg shadow-lg">
            {url ? (
                <ReactPlayer
                    url={url}
                    controls
                    width="100%"
                    height="50px"
                    playing
                    className="rounded-lg"
                />
            ) : (
                <div></div>
            )}
        </div>
    );
}

MusicPlayerPopup.propTypes = {
    url: PropTypes.string.isRequired,
};

export default MusicPlayerPopup;