import GetInvolved from "@/features/home/components/GetInvolved";
import HeroBanner from "@/features/home/components/HeroBanner";
import Initiatives from "@/features/home/components/Initiatives";
import Intro from "@/features/home/components/Intro";
import ValuableCount from "@/features/home/components/ValuableCount";
import Partners from "@/features/home/components/Partners";
import Works from "@/components/works/Works";
import SupportContainer from "@/components/support/SupportContainer";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Intro />
      <Initiatives />
      <GetInvolved />
      <Works />
      <ValuableCount />
      <section className="layout-section-xl">
        <SupportContainer />
      </section>
      <Partners />
    </main>
  );
}
