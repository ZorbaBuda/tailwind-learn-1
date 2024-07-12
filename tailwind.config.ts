import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography:  ({
        DEFAULT: {
          css: {
            maxWidth: "90ch",
          }
        }
      }),
     colors: {
       grey_light: "#F5F1EE",
       blue_light: "#A0CDE5",
       blue_dark: "#052D41",
       salmon: "#FB846B",
       //site 2
       turquesa: "#0B4750",
       verde: "#C9FFB3",
       gris: "#E8E7E7",
       verde_oscuro:"#153137",
       verde_claro: "#EFFFE8"
     },
      fontFamily: {
      larken: ["larken", "serif"],
      larken_thin: ["larken-thin", "serif"],
      manrope: ["manrope", 'sans-serif'],
      jakarta: ["jakarta"]
    }
    },
   
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
