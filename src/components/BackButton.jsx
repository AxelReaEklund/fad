// src/components/BackButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function BackButton({ to = "/" }) {
    return (
        <Link to={to} className="absolute top-4 left-4 flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="font-medium">Back</span>
        </Link>
    );
}

export default BackButton;