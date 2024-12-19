import { Link } from "react-router-dom";
//import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import BackButton from "../components/BackButton";


function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Back Icon */}
            <BackButton to="/" />

            <h2 className="text-4xl font-bold mb-4 mt-16 text-center">Portfolio</h2>
        </div>
    );
}

export default Portfolio;
