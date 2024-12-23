import Hero from "@/features/about/components/Hero";
import Story from "@/features/about/components/Story";
import VissionMission from "@/features/about/components/VisionMission";
import WhatWeDo from "@/features/about/components/WhatWeDo";

function about() {
  return (
    <main>
      <Hero />
      <VissionMission />
      <WhatWeDo />
      <Story />
    </main>
  );
}

export default about;
