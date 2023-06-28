/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#aca2e8",

          secondary: "#b5210a",

          accent: "#6260db",

          neutral: "#29222f",

          "base-100": "#323036",

          info: "#a6d7ed",

          success: "#1ee6be",

          warning: "#f7ac22",

          error: "#e43f73",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
