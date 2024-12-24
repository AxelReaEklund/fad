// import forms from '@tailwindcss/forms';
// import typography from '@tailwindcss/typography';
// import scrollbarHide from 'tailwind-scrollbar-hide';
//
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html", // Include the Vite entry HTML file
//     "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS/JSX/TSX files in `src` folder
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#EC4899", // Pink
//         secondary: "#64748B", // Gray-blue
//         accent: "#F43F5E", // Red-pink
//         background: "#000000", // Black background
//         textPrimary: "#ffffff", // White text
//         textSecondary: "#BFBFBF", // Light gray text
//       },
//       fontFamily: {
//         sans: ["Poppins", "sans-serif"], // General text font
//         heading: ["Poppins", "Helvetica", "Arial", "sans-serif"], // Heading font
//       },
//     },
//   },
//   plugins: [
//     forms,         // Import and use Tailwind CSS Forms plugin
//     typography,    // Import and use Tailwind CSS Typography plugin
//     scrollbarHide, // Import and use Tailwind Scrollbar Hide plugin
//   ],
// };

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
        background: "#0c0c0c", // Black background
        textPrimary: "#ffffff", // White text
        textSecondary: "#BFBFBF", // Light gray text
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // General text font
        heading: ["Poppins", "Helvetica", "Arial", "sans-serif"], // Heading font
      },
      keyframes: {
        hoverLining: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'hover-lining': 'hoverLining 0.4s ease-out forwards',
      },
    },
  },
  plugins: [
    forms,         // Import and use Tailwind CSS Forms plugin
    typography,    // Import and use Tailwind CSS Typography plugin
    scrollbarHide, // Import and use Tailwind Scrollbar Hide plugin
    function ({ addComponents }) {
      addComponents({
        '.hover-lining-animation': {
          position: 'relative',
          display: 'inline-block',
          color: '#ffffff', // White text
          fontSize: '1.5rem', // Adjust font size
          '::before, ::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            background: 'linear-gradient(to right, #ff0000, #00ffff)',
            transform: 'scaleX(0)',
            transition: 'transform 0.4s ease-out',
          },
          '::before': {
            top: '-5px',
            transformOrigin: 'left',
          },
          '::after': {
            bottom: '-5px',
            transformOrigin: 'right',
          },
          '&:hover::before, &:hover::after': {
            transform: 'scaleX(1)',
          },
        },
      });
    },
  ],
};
