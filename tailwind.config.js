/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '1': '1.33px',
      '2': '2px',
    },
    extend: {
      colors: {
        "back": "#F9FBFC",
        "para": "#636765",
        "fint": "#8E8E93",
        "button": "#175CD3",
        "half": "#E84848",
        "full": "#E6E6E6",
        "forgot": "#175CD3",
        "ablack": "#111111",
        "welcome-button": "#175CD3",
        "border": "rgba(142, 142, 147, 0.56)",
      }
    },
  },
  plugins: [],
}

