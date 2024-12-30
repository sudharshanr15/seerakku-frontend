import Button from "@/components/buttons/Button";

const Intro = () => {
  return (
    <section className="bg-primary">
      <div className="layout-section-xl mx-auto text-center py-20">
        <h2 className="heading-2">{'"Our Story"'}</h2>
        <p className="text-center mb-4">
        Seerakku was born alongside the birth of our founder's daughter. The co-founders, SP Dinesh and Janaganandhini D had a baby girl on March 3rd, 2023. <br></br>

Our founders also felt a sense of responsibility to ensure a safe and sustainable future for their children and future generations. So, they planned to offset their baby’s future carbon emissions with a food forest.

With the help of farmers in Krishnagiri district Shivalingapuram village, our founders have planted six thousand trees, shrubs, and plants that provide food and habitat for local wildlife and absorb and store carbon from the atmosphere. They named this a NOVA initiative.

The food forest will grow with her as the baby grows, providing a constant reminder of the love and hope that inspired the NOVA initiative. And that NFT will continue to symbolize the importance of individual action in creating a sustainable future.

After getting massive satisfaction from doing good for nature and their child, they decided to do this for every newborn in India. So they founded an NGO called Seerakku ( Seerakku is a Tamil word that means "Regulate" ).

        </p>
        <Button type="primary_green">Learn More</Button>
      </div>
    </section>
  );
};

export default Intro;
