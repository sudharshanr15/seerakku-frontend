import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FED049",
          yellow: "#FED049",
          green: "#68B984",
        },
        secondary: {
          "light-green": "#CFFDE1",
          forest: "#3D5656",
          "yellow" : "#FED04933"
        },
        footer: "#111111",
      },
      fontFamily: {
        sans: ["var(--font-itc-avant-garde)"],
        "big-noodle-titling": ["var(--font-big-noodle-titling)"],
      },
      fontSize: {
        "30": ["30px", "38px"],
        "40": ["40px", "48px"],
        "50": ["50px", "58px"],
        "80": ["80px", "88px"],
      },
      screens: {
        sm: "576px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
