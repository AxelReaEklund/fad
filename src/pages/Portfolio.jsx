import { Link } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Back Icon */}
            <Link to="/" className="absolute top-4 left-4 flex items-center space-x-2 text-gray-800 hover:text-gray-600">
                <ChevronLeftIcon className="h-6 w-6" />
                <span className="font-medium"></span>
            </Link>

            <h2 className="text-4xl font-bold mb-4 mt-16 text-center">Portfolio</h2>
        </div>
    );
}

export default Portfolio;
