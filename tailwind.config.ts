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
        },
        footer: "#111111",
      },
    },
  },
  plugins: [],
} satisfies Config;
