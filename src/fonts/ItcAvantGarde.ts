import localFont from "next/font/local";

export const itcAvanteGarde = localFont({
  src: [
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Bold Oblique.otf",
      weight: "700",
      style: "oblique",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Book Oblique.otf",
      weight: "400",
      style: "oblique",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Demi Oblique.otf",
      weight: "600",
      style: "oblique",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Extra Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Extra Light Oblique.otf",
      weight: "200",
      style: "oblique",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC-Avant-Garde-Gothic-Std/ITC Avant Garde Gothic Std Medium Oblique.otf",
      weight: "500",
      style: "oblique",
    },
  ],
  variable: "--font-itc-avant-garde",
});
