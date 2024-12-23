import PageDesc from "@/components/PageHero/Description";
import PageHeading from "@/components/PageHero/Heading";
import PageHero from "@/components/PageHero/index";

function Hero() {
  return (
    <PageHero>
      <PageHeading>Our Focus Area</PageHeading>
      <PageDesc>
        Working towards the United {"Nation's"} Sustainable Development Goals,
        Seerakku focuses on the following areas
      </PageDesc>
    </PageHero>
  );
}

export default Hero;
