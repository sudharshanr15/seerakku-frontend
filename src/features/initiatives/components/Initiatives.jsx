import Image from "next/image";
import nova from "@/features/initiatives/assets/nova.png";
import elephant from "@/features/initiatives/assets/elephant.png";
import farmers from "@/features/initiatives/assets/farmers.png";
import newImage from "@/features/initiatives/assets/new.png";
import one from "@/features/initiatives/assets/one.png";
import plant from "@/features/initiatives/assets/plant.png";
import sparrow from "@/features/initiatives/assets/sparrow.png";
import Button from "@/components/buttons/Button";
import Link from "next/link";

const Initiative = () => {
  return (
    <main>
      <section className="my-20 flex lg:flex-row flex-col  justify-center  mx-auto lg:w-4/5 items-center px-5 lg:px-0 gap-10">
        <div className=" lg:w-1/2">
          <Image src={nova} alt="NOVA"></Image>
        </div>

        <div className=" h-full lg:w-1/2 ">
          <p className=" heading-2">NOVA</p>
          <div className="pb-10 flex flex-col gap-5 text-lg">
            <p>
              NOVA, is our prime iniative that ensures that every newborn starts
              life with a carbon-neutral footprint. For each child born, we
              plant trees and establish food forests, offsetting the carbon
              emissions of their lifetime. This program not only celebrates new
              life but also contributes to a greener planet, ensuring a
              sustainable and healthy future for the next generation.
            </p>
          </div>
          <Link href={"/gallery"}>
            <Button type="primary_green">See Our Gallery</Button>
          </Link>
        </div>
      </section>

      <section className=" my-20 bg-secondary-yellow py-10 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row-reverse gap-20 justify-center  mx-auto lg:w-4/5 items-center ">
          <div className=" lg:w-1/2">
            <Image src={newImage} alt="New Tree for New Life"></Image>
          </div>

          <div className=" h-full lg:w-1/2">
            <p className=" heading-2">NEW TREE FOR NEW LIFE</p>
            <div className="pb-10 flex flex-col gap-5 text-lg">
              <p>
                Celebrate the miracle of life with our "New Tree, For New Life"
                initiative. In partnership with hospitals, we plant a tree to
                honor each newborn, symbolizing growth and vitality. This act of
                planting creates a legacy of sustainability and contributes to
                global reforestation efforts. Join us in welcoming new lives
                while also fostering a healthier environment.
              </p>
            </div>
            <Link href={"/gallery"}>
              <Button type="primary">See Our Gallery</Button>
            </Link>{" "}
          </div>
        </div>
      </section>

      <section className=" my-20 flex lg:flex-row flex-col  justify-center  mx-auto lg:w-4/5 items-center px-5 lg:px-0 gap-10">
        <div className=" lg:w-1/2">
          <Image src={one} alt="One Student : One Life"></Image>
        </div>

        <div className=" h-full lg:w-1/2 ">
          <p className=" heading-2">RENTAL FREE AGRO MACHINE</p>
          <div className="pb-10 flex flex-col gap-5 text-lg">
            <p>
            Our "Rental Free Agro Machine" program empowers farmers by providing access to agricultural machinery at no cost. By supporting local farmers with the tools they need we promote sustainable farming practices, and improve livelihoods. This initiative helps build a stronger agricultural community and economic prosperity.
            </p>
          </div>
          <Link href={'/gallery'}>
          <Button type="secondary_forest">See Our Gallery</Button>
          </Link>
        </div>
      </section>

      <section className=" my-20 bg-secondary-light-green px-5 lg:px-0 py-10">
        <div className="flex flex-col lg:flex-row-reverse gap-20 justify-center  mx-auto lg:w-4/5 items-center ">
          <div className=" lg:w-1/2">
            <Image src={plant} alt="WALK FOR PLASTIC"></Image>
          </div>

          <div className=" h-full lg:w-1/2">
            <p className=" heading-2">Plastic Pollution Mitigation</p>
            <div className="pb-10 flex flex-col gap-5 text-lg">
              <p>
              Join us in our "Walk for Plastic" initiative, where we organize community walks to collect plastic waste and promote recycling. This aims to  raise awareness about the impact of plastic pollution. By coming together to reduce plastic waste, we contribute to a cleaner, healthier planet and also a sense of community responsibility.
              </p>
            </div>
            <Link href={'/gallery'}>
            <Button type="primary_green">See Our Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className=" my-20 flex lg:flex-row flex-col  justify-center  mx-auto lg:w-4/5 items-center px-5 lg:px-0 gap-10">
        <div className=" lg:w-1/2">
          <Image src={farmers} alt="Tree for Farmers"></Image>
        </div>

        <div className=" h-full lg:w-1/2 ">
          <p className=" heading-2">Agroforestry for Sustainable Livelihoods</p>
          <div className="pb-10 flex flex-col gap-5 text-lg">
            <p>
            Our "Trees for Farmers" initiative collaborates with local farmers to integrate trees into their agricultural practices. By establishing agroforestry systems, we help improve soil health, increase biodiversity, and enhance crop yields. This program supports farmers' livelihoods and contributes to environmental conservation. Together, we work towards a future of ecological balance.
            </p>
          </div>
          <Link href={'/gallery'}>
          <Button type="secondary_forest">See Our Gallery</Button>
          </Link>
        </div>
      </section>

      <section className=" my-20 bg-secondary-yellow py-10 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row-reverse gap-20 justify-center  mx-auto lg:w-4/5 items-center ">
          <div className=" lg:w-1/2">
            <Image src={sparrow} alt="Tree for Sparrows"></Image>
          </div>

          <div className=" h-full lg:w-1/2 ">
            <p className=" heading-2">FOREST BATHING</p>
            <div className="pb-10 flex flex-col gap-5 text-lg">
              <p>
              Experience the rejuvenating power of nature with our "Forest Bathing" initiative. We encourage people to immerse themselves in the tranquility of forests, promoting mental and physical well-being. This practice not only enhances individual health but also fosters a deeper connection with the nature. By embracing forest bathing, we nurture our minds and bodies while appreciating the beauty of our forests.
              </p>
            </div>
            <Link href={"/gallery"}>
              <Button type="primary">See Our Gallery</Button>
            </Link>{" "}
          </div>
        </div>
      </section>

      <section className=" my-20 flex lg:flex-row flex-col  justify-center  mx-auto lg:w-4/5 items-center px-5 lg:px-0 gap-10">
        <div className=" lg:w-1/2">
          <Image src={elephant} alt="TREE FOR ELEPHANTS"></Image>
        </div>

        <div className=" h-full lg:w-1/2 ">
          <p className=" heading-2">Waterbody Restoration and Conservation</p>
          <div className="pb-10 flex flex-col gap-5 text-lg">
            <p>
            Our "Revive Blue" program is dedicated to restoring and protecting our water bodies. Through clean-up drives and conservation efforts, we aim to rejuvenate water bodies. This initiative enhances water quality, supports aquatic life, and ensures that future generations can enjoy clean and healthy water. Join us in our mission to revive and preserve our precious blue resources.
            </p>
          </div>
          <Button type="primary_green">See Our Gallery</Button>
        </div>
      </section>
    </main>
  );
};

export default Initiative;
