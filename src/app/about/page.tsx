import Hero from "@/features/about/components/Hero";
import Story from "@/features/about/components/Story";
import Team from "@/features/about/components/Team";
import VissionMission from "@/features/about/components/VisionMission";
import WhatWeDo from "@/features/about/components/WhatWeDo";

function about() {
  return (
    <main>
      <Hero />
      <VissionMission />
      <WhatWeDo />
      <Story />
      <Team />
    </main>
  );
}

export default about;
