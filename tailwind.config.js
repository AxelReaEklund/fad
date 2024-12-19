/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Deep blue
        secondary: "#64748B", // Gray-blue
        accent: "#F43F5E", // Red-pink
        background: "#000000", // Light background
        textPrimary: "#ffffff", // Dark text
        textSecondary: "#BFBFBF", // Light gray text
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // General text
        heading: ["Poppins", "Helvetica", "Arial", "sans-serif"], // Lighter heading font
      },
    },
  },
  plugins: [],
};