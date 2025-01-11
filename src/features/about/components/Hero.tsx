import PageHero from "@/components/PageHero";
import HeroDescription from "@/components/PageHero/Description";
import HeroHeading from "@/components/PageHero/Heading";

function Hero() {
  return (
    <PageHero>
      <HeroHeading>About Us</HeroHeading>
      <HeroDescription>
      Seerakku is a passionate environmental organization dedicated to conserving nature, mitigating climate change, and fostering sustainable development.
      </HeroDescription>
    </PageHero>
  );
}

export default Hero;
