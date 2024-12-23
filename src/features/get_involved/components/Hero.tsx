import PageHero from "@/components/PageHero";
import HeroDescription from "@/components/PageHero/Description";
import HeroHeading from "@/components/PageHero/Heading";

function Hero() {
  return (
    <PageHero>
      <HeroHeading>Get Involved</HeroHeading>
      <HeroDescription>
        At Seerakku, we believe that collective action is the key to creating a
        sustainable future. There are several ways you can get involved and
        contribute to our mission
      </HeroDescription>
    </PageHero>
  );
}

export default Hero;
