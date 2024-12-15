import GetInvolved from "@/features/home/components/GetInvolved";
import HeroBanner from "@/features/home/components/HeroBanner";
import Initiatives from "@/features/home/components/Initiatives";
import Intro from "@/features/home/components/Intro";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Intro />
      <Initiatives />
      <GetInvolved />
    </main>
  );
}
