import Hero from "@/features/about/components/Hero";
import Story from "@/features/about/components/Story";
import Team from "@/features/about/components/Team";
import VissionMission from "@/features/about/components/VisionMission";
import WhatWeDo from "@/features/about/components/WhatWeDo";
import WhoWeAre from "@/features/about/components/WhoWeAre";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

function about() {
  return (
    <main>
      <Hero />
      <VissionMission />
      <WhoWeAre />
      <WhatWeDo />
      <Story />
    </main>
  );
}

export default about;
