import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
       grey_light: "#F5F1EE",
       blue_light: "#A0CDE5",
       blue_dark: "#052D41",
       salmon: "#FB846B"
     },
      fontFamily: {
      larken: ["larken", "serif"],
      larken_thin: ["larken-thin", "serif"]
    }
    },
   
  },
  plugins: [],
};
export default config;
