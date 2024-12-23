import PropTypes from "prop-types";

function Header({ txt }) {
    return (
        <div>
            <header className="text-center">
                <h1 className="text-7xl font-extrabold text-textPrimary tracking-widest">
                    {txt}
                </h1>
            </header>
        </div>
    );
}

// Add prop-types validation
Header.propTypes = {
    txt: PropTypes.string.isRequired, // Ensure 'txt' is a required string
};

export default Header;
