/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#6ee7b7", // Emerald green accent (matches design)
          "primary-content": "#0a0a0a",
          "base-100": "#0c0c0e", // Very dark background
          "base-200": "#111114",
          "base-300": "#18181c",
          "base-content": "#e5e7eb",
          neutral: "#1f2028",
          "neutral-content": "#9ca3af",
        },
      },
    ],
    darkTheme: "dark",
  },
};
