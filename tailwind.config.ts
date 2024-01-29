import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),hsla(0,0%,100%,0))",
        "primary-gradient": "",
      },
      boxShadow: {
        primary: "rgb(80 63 205 / 50%) 0px 1px 40px"
      },
      fontFamily: {
        sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif'
      },
      colors: {
        // transparent:"transparent",
        background: '#000212',
        "transparent-white": "rgba(255,255,255,0.08)",
        grey: "#858699",
        "grey-dark": "#222326",
        "primary-text":"#b4bcd0",
        "off-white":"#f7f8f8"
      },
      fontSize: {
        "xs":"1.3rem",
        "sm":"1.4rem",
        "md":"1.6rem",
        "lg":"1.8rem",
        "xl":["2.2rem", "1.3"],
        "2xl":["2.4rem", "1.3"],
        "3xl":["2.6rem", "1.3"],
        "4xl":["3.2rem", "1.3"],
        "5xl":["4rem", "1.3"],
        "6xl":["4.4rem", "1"],
        "7xl":["4.8rem", "1"],
        "8xl":["8rem", "1"],
        
      
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2.0rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4.0rem",
        11: "4.4rem",
        12: "4.8rem",
        "navigation-height": "var(--navigation-height)"
      }
    },
  },
  plugins: [],
};
export default config;
