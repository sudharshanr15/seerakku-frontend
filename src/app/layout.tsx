import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MNavbar from "@/components/MNavbar";
import "@radix-ui/themes/styles.css";
import Footer from "@/components/Footer";
import { itcAvanteGarde } from "@/fonts/ItcAvantGarde";
import { bigNoodleTitling } from "@/fonts/BigNoodleTitling";
import SupportModal from "@/components/support/SupportModal";
import ModalProvider from "@/components/modal/ModalProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Seerakku",
    default: "Seerakku",
  },
  description: "Creating a Sustainable Legacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-foreground ${itcAvanteGarde.className} ${bigNoodleTitling.variable} antialiased`}
      >
        <ModalProvider>
          {/* <Theme> */}
          <Navbar />
          <MNavbar />
          {children}
          <Footer />
          {/* </Theme> */}
          <SupportModal />
        </ModalProvider>
      </body>
    </html>
  );
}
