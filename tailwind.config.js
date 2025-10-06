// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dcd7c9",   // Example: Blue
        secondary: "#F59E0B", // Amber
        danger: "#EF4444",    // Red
        accent: "#10B981"     // Green
      }
    }
  },
  plugins: []
};
