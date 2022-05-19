module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      popins: ["Poppins"],
      square: ["Square Peg"],
    },
    colors: {
      "red-300": "#fc8181",
      "red-400": "#f56565",
      "red-500": "#e53e3e",
      "red-600": "#c53030",

      "blue-300": "#63b3ed",
      "blue-400": "#4299e1",
      "blue-500": "#3182ce",
      "blue-600": "#2b6cb0",

      "cyan-300": "#76e4f7",
      "cyan-400": "#0bc5ea",
      "cyan-500": "#00b5d8",
      "cyan-600": "#00a3c4",

      "gray-100": "#EDF2F7",
      "gray-200": "#E2E8F0",
      "gray-300": "#cbd5e0",
      "gray-400": "#a0aec0",
      "gray-500": "#718096",
      "gray-600": "#4a5568",
      "gray-700": "#2d3748",
      "gray-800": "#1a202c",
      "gray-900": "#171923",

      "purple-800": "#bd3dbd",
      white: "#fff",
    },
    screens: {
      mobile: { max: "500px" },
      table: { max: "900px" },
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 2s linear infinite",
        levite: "levite 3s linear infinite",
      },
      keyframes: {
        levite: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
