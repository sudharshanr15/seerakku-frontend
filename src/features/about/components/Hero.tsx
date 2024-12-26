import PageHero from "@/components/PageHero";
import HeroDescription from "@/components/PageHero/Description";
import HeroHeading from "@/components/PageHero/Heading";

function Hero() {
  return (
    <PageHero>
      <HeroHeading>About Us</HeroHeading>
      <HeroDescription>
        Through our efforts, we strive to create a sustainable future for all
        and mitigate the effects of climate change.
      </HeroDescription>
    </PageHero>
  );
}

export default Hero;
