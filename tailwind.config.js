import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the Vite entry HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS/JSX/TSX files in `src` folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC4899", // Pink
        secondary: "#64748B", // Gray-blue
        accent: "#F43F5E", // Red-pink
        background: "#000000", // Black background
        textPrimary: "#ffffff", // White text
        textSecondary: "#BFBFBF", // Light gray text
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // General text font
        heading: ["Poppins", "Helvetica", "Arial", "sans-serif"], // Heading font
      },
    },
  },
  plugins: [
    forms,         // Import and use Tailwind CSS Forms plugin
    typography,    // Import and use Tailwind CSS Typography plugin
    scrollbarHide, // Import and use Tailwind Scrollbar Hide plugin
  ],
};
