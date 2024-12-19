import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex flex-col justify-center items-center h-full">
            <Link to="/portfolio" className="text-2xl text-textPrimary hover:text-textSecondary my-3.5 tracking-widest">
                Portfolio
            </Link>
            <Link to="/bin" className="text-2xl text-textPrimary hover:text-textSecondary my-3.5 tracking-widest">
                The Bin
            </Link>
            <Link to="/about" className="text-2xl text-textPrimary hover:text-textSecondary my-3.5 tracking-widest">
                About
            </Link>
        </nav>
    );
}

export default Navigation;
