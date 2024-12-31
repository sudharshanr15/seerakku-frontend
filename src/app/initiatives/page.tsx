import Hero from "@/features/initiatives/components/Hero";
import Initiative from "@/features/initiatives/components/Initiatives";
import Join from "@/features/initiatives/components/JoinWithUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives",
};

export default function Intiatives() {
  return (
    <main>
      <Hero />
      <Initiative />
      <Join />
    </main>
  );
}
