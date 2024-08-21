/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "480px"
      },
      colors: {
        primary: "#f0f2f5",
        secondary: "#ff813f",
        tertiary: "#222222",
        slate: {
          10: "#f1f3f4"
        },
        green: {
          50: "#30AF5B",
          90: "#292C27"
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        }
      }
    },
  },
  plugins: [],
}

