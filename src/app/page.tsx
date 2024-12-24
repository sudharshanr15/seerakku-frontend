import GetInvolved from "@/features/home/components/GetInvolved";
import HeroBanner from "@/features/home/components/HeroBanner";
import Initiatives from "@/features/home/components/Initiatives";
import Intro from "@/features/home/components/Intro";
import ValuableCount from "@/features/home/components/ValuableCount";
import Support from "@/features/home/components/Support";
import Partners from "@/features/home/components/Partners";
import Works from "@/components/works/Works";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Intro />
      <Initiatives />
      <GetInvolved />
      <Works />
      <ValuableCount />
      <Support />
      <Partners />
    </main>
  );
}
