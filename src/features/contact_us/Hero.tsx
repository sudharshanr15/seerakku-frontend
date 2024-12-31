import PageHero from "@/components/PageHero";
import HeroDescription from "@/components/PageHero/Description";
import HeroHeading from "@/components/PageHero/Heading";

function Hero() {
  return (
    <PageHero>
      <HeroHeading>Contact Us</HeroHeading>
      <HeroDescription>
        Interested in our work at Seeraku? For any questions or thoughts, we‘d
        love to hear from you.
      </HeroDescription>
    </PageHero>
  );
}

export default Hero;
