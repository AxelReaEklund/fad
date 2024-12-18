import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex flex-col h-full items-start items-center">
            <Link to="/portfolio" className="text-lg text-blue-500 hover:text-blue-700">
                Portfolio
            </Link>
            <Link to="/bin" className="text-lg text-blue-500 hover:text-blue-700">
                The Bin
            </Link>
            <Link to="/about" className="text-lg text-blue-500 hover:text-blue-700">
                About
            </Link>
        </nav>
    );
}

export default Navigation;