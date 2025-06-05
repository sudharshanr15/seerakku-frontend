import PageHero from "@/components/PageHero";
import HeroDescription from "@/components/PageHero/Description";
import HeroHeading from "@/components/PageHero/Heading";

function Hero() {
  return (
    <PageHero>
      <HeroHeading>About Us</HeroHeading>
      <HeroDescription>
        Seerakku is an Environmental Movement Rooted in Action: <br />
        We lead community-powered initiatives to restore ecosystems, fight climate change, and build a greener India.
      </HeroDescription>
    </PageHero>
  );
}

export default Hero;
