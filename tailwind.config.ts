import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FED049",
        secondary: {
          gold: "#FED049",
          mint: "#CFFDE1",
          forest: "#3D5656",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
