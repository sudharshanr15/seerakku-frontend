import Hero from "@/features/get_involved/components/Hero";
import InvolvedList from "@/features/get_involved/components/InvolvedList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
};

function Page() {
  return (
    <main>
      <Hero />
      <InvolvedList />
    </main>
  );
}

export default Page;
