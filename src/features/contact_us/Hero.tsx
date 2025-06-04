import PageHero from "@/components/PageHero";
import HeroDescription from "@/components/PageHero/Description";
import HeroHeading from "@/components/PageHero/Heading";

function Hero() {
  return (
    <PageHero>
      <HeroHeading>Contact Us</HeroHeading>
      <HeroDescription>
        Want to volunteer, collaborate, or bring Seerakku to your school, community, or company?
        <br/>
        <br/>
        We’d love to hear from you.
      </HeroDescription>
    </PageHero>
  );
}

export default Hero;
