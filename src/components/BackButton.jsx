import { Link } from "react-router-dom";
import PropTypes from "prop-types";

BackButton.propTypes = {
    to: PropTypes.string,
};

function BackButton({ to = "/" }) {
    return (
        <Link to={to} className="absolute top-4 left-4 flex items-center space-x-2 text-gray-800 hover:text-gray-600 group">
            <svg className="h-8 w-8 text-textPrimary group-hover:text-primary" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <span className="font-extrabold "></span>
        </Link>
    );
}

export default BackButton;