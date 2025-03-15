import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = <const>{
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Source Sans 3'", ...defaultTheme.fontFamily.sans],
        serif: ["'Source Serif 4'", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "pa-orange": "rgb(147,87,38)",
        "pa-primary": "rgb(21, 21, 21)",
        "pa-green": "rgb(103, 97, 40)",
        "pa-red": "rgb(129, 54, 26)",
        "pa-cream": "rgb(252, 244, 229)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

export default config;
