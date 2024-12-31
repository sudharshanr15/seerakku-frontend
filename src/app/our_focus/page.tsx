import Donor from "@/features/our_focus/components/Donor";
import FocusList from "@/features/our_focus/components/FocusList";
import Hero from "@/features/our_focus/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Focus Area",
};

function Page() {
  return (
    <main>
      <Hero />
      <FocusList />
      <Donor />
    </main>
  );
}

export default Page;
