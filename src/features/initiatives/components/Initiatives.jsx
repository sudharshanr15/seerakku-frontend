import Image from "next/image";
import nova from "@/features/initiatives/assets/nova.png";
import elephant from "@/features/initiatives/assets/elephant.png";
import farmers from "@/features/initiatives/assets/farmers.png";
import newImage from "@/features/initiatives/assets/new.png";
import one from "@/features/initiatives/assets/one.png";
import plant from "@/features/initiatives/assets/plant.png";
import sparrow from "@/features/initiatives/assets/sparrow.png";
import { ButtonType } from "@/components/buttons/type";
import Button from "@/components/buttons/Button";

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
              NOVA, Carbon-Neutral Baby: NOVA is our flagship initiative that
              focuses on offsetting carbon emissions associated with newborns
            </p>
            <p>
              We believe that every child deserves a sustainable and healthy
              future. Through NOVA, we plant trees and create food forests in
              the name of each newborn, ensuring a carbon-neutral footprint for
              their lifetime.
            </p>
            <p>
              Join us in celebrating the birth of a child while contributing to
              a greener planet.
            </p>
          </div>
          <Button type={ButtonType.primary_green}>See Our Gallery</Button>
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
              Through our program, we celebrate the arrival of a new life by partnering with hospitals, and planting a tree in honor of the newborn
              </p>
              <p>
              This initiative symbolizes growth, vitality, and the interconnectedness of all living beings
              </p>
              <p>
              By planting trees, we create a legacy of sustainability and contribute to reforestation efforts.
              </p>
            </div>
            <Button type={ButtonType.primary}>See Our Gallery</Button>
          </div>
        </div>
      </section>

      <section className=" my-20 flex lg:flex-row flex-col  justify-center  mx-auto lg:w-4/5 items-center px-5 lg:px-0 gap-10">
        <div className=" lg:w-1/2">
          <Image src={one} alt="One Student : One Life"></Image>
        </div>

        <div className=" h-full lg:w-1/2 ">
          <p className=" heading-2">ONE STUDENT : ONE LIFE</p>
          <div className="pb-10 flex flex-col gap-5 text-lg">
            <p>
            Education and environmental stewardship go hand in hand. Through our "One Student, One Tree" initiative, we encourage students to actively participate in tree planting activities.
            </p>
            <p>
            For each student involved, we plant a tree in their name, fostering a sense of environmental responsibility and connecting them to nature.
            </p>
            <p>
            By empowering students as guardians of the environment, we sow the seeds for a sustainable future.
            </p>
          </div>
          <Button type={ButtonType.secondary_forest}>See Our Gallery</Button>
        </div>
      </section>

      <section className=" my-20 bg-secondary-light-green px-5 lg:px-0 py-10">
        <div className="flex flex-col lg:flex-row-reverse gap-20 justify-center  mx-auto lg:w-4/5 items-center ">
          <div className=" lg:w-1/2">
            <Image src={plant} alt="Plant and Greet"></Image>
          </div>

          <div className=" h-full lg:w-1/2">
            <p className=" heading-2">PLANT & GREET</p>
            <div className="pb-10 flex flex-col gap-5 text-lg">
              <p>
              This initiative brings communities together through tree-planting events. Participants have the opportunity to plant trees while enjoying the company of others.              </p>
              <p>
              This program not only promotes environmental conservation but also cultivates a sense of togetherness and joy in making a positive impact.              </p>
              
            </div>
            <Button type={ButtonType.primary_green}>See Our Gallery</Button>
          </div>
        </div>
      </section>

      <section className=" my-20 flex lg:flex-row flex-col  justify-center  mx-auto lg:w-4/5 items-center px-5 lg:px-0 gap-10">
        <div className=" lg:w-1/2">
          <Image src={farmers} alt="Tree for Farmers"></Image>
        </div>

        <div className=" h-full lg:w-1/2 ">
          <p className=" heading-2">TREE FOR FARMERS</p>
          <div className="pb-10 flex flex-col gap-5 text-lg">
            <p>
            Through our "Trees For Farmers" initiative, we collaborate with local farmers to establish agroforestry systems.
            </p>
            <p>
            By integrating trees with agricultural practices, we help farmers improve their livelihoods, enhance soil health, and promote sustainable land use.
            </p>
            <p>
            Together, we work towards achieving food security, economic prosperity, and environmental sustainability.
            </p>
          </div>
          <Button type={ButtonType.secondary_forest}>See Our Gallery</Button>
        </div>
      </section>

      <section className=" my-20 bg-secondary-yellow py-10 px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row-reverse gap-20 justify-center  mx-auto lg:w-4/5 items-center ">

        <div className=" lg:w-1/2">
          <Image src={sparrow} alt="Tree for Sparrows"></Image>
        </div>

        <div className=" h-full lg:w-1/2 ">
          <p className=" heading-2">TREE FOR SPARROWS</p>
          <div className="pb-10 flex flex-col gap-5 text-lg">
            <p>
            Our "Trees For Sparrows" program aims to create mini sanctuaries for sparrows in urban areas.
            </p>
            <p>
            By implementing the Miyawaki Forest technique, we establish dense forests that provide food, shelter, and nesting opportunities for these beloved birds.
            </p>
            <p>
            Through this initiative, we enhance biodiversity, protect sparrow populations, and restore ecological balance.
            </p>
          </div>
          <Button type={ButtonType.primary}>See Our Gallery</Button>
        </div>
        </div>
      </section>

      <section className=" my-20 flex lg:flex-row flex-col  justify-center  mx-auto lg:w-4/5 items-center px-5 lg:px-0 gap-10">
        <div className=" lg:w-1/2">
          <Image src={elephant} alt="TREE FOR ELEPHANTS"></Image>
        </div>

        <div className=" h-full lg:w-1/2 ">
          <p className=" heading-2">TREE FOR ELEPHANTS</p>
          <div className="pb-10 flex flex-col gap-5 text-lg">
            <p>
            Our "Trees For Elephants" initiative focuses on the conservation of elephants and their habitats.
            </p>
            <p>
            We plant trees in areas crucial for elephant conservation, providing them with food sources, shelter, and safe corridors.
            </p>
            <p>
              Join us in celebrating the birth of a child while contributing to
              a greener planet.
            </p>
          </div>
          <Button type={ButtonType.primary_green}>See Our Gallery</Button>
        </div>
      </section>
    </main>
  );
};

export default Initiative;
