import Hero from "@/features/whatwedo/components/Hero";
import Projects from "@/features/whatwedo/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do",
};

function about() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}

export default about;
