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
       verde_claro: "#EFFFE8",
       //site3
       cBlue:'#274EA9',
       cGray: '#C0C9DA',
       cGrayLight:'#EDF2F6',
       cBlueLight:'#2EEAFF',
       cViolet: '#454C7D',
       cBlueDark: '#0D112F',
       black_op: '#282c4bbf'
     },
      fontFamily: {
      larken: ["larken", "serif"],
      larken_thin: ["larken-thin", "serif"],
      manrope: ["manrope", 'sans-serif'],
      jakarta: ["jakarta"],
      satoshi: ["satoshi"],
      satoshi_medium: ["satoshi-medium"]
    },
    backgroundImage: {
      heroDesktop: "url('/img/celares/home/Cell_Shuttle_Hero_Shadow@2x.jpg')",
      heroMobile: "url('/img/celares/home/Home_Hero_Mobile@2x.jpg')",
      heroForm:  "url('/img/celares/home/bg-footer.jpg')",
      careersDesktop: "url('/img/celares/home/Home_Careers_BG@2x-scaled.jpg')",
      careersMobile: "url('/img/celares/home/Home_Careers_BG_Mobilev2@2x.jpg')",
      
    
    },
    },
   
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
