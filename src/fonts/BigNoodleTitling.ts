import localFont from "next/font/local";

export const bigNoodleTitling = localFont({
  src: [
    {
      path: "../../public/fonts/Big-Noodle-Titling/big_noodle_titling.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Big-Noodle-Titling/big_noodle_titling_oblique.ttf",
      style: "oblique",
    },
  ],
  variable: "--font-big-noodle-titling",
});
