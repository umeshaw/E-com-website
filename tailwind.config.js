/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#f42c37",
      secondary: "#f42c37",
      brandYellow: "#fdc62e",
      brandBlue: "#1376f4",
      brandWhite: "#eeeeee",
      brandGreen: "#2dcc6f",
    },
  },
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem", // Corrected typo
      sm: "3rem",
    },
  },
};
export const plugins = [];


