import { Link } from "react-router-dom";
import '../custom_css/HoverUnderline.css'; // Import the separate CSS file

function Navigation() {
    return (
        <nav className="flex flex-col justify-center items-center h-full">
            <Link
                to="/portfolio"
                className="relative text-2xl text-textPrimary hover-underline my-3.5 tracking-widest"
            >
              <span className="inline-block transition-transform hover:scale-105">
                Portfolio
              </span>
            </Link>

            <Link to="/bin" className="relative text-2xl text-textPrimary hover-underline my-3.5 tracking-widest">
                <span className="inline-block transition-transform hover:scale-105">
                The Bin
              </span>
            </Link>
            <Link to="/about" className="relative text-2xl text-textPrimary hover-underline my-3.5 tracking-widest">
                <span className="inline-block transition-transform hover:scale-105">
                About
              </span>
            </Link>
        </nav>
    );
}

export default Navigation;
