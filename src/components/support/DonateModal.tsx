"use client";

import Image from "next/image";
import  support_image  from "./modal.jpg";
import DonateNow from "@/components/buttons/DonateNow";
import { useEffect } from "react";
import Button from "../buttons/Button";
import DonatePageLink from "../buttons/DonatePageLink";

const DonateModal = () => {

  return (
    <div className="flex flex-col gap-5 bg-white h-full">
      <div className="w-full">
        <Image
          src={support_image}
          alt="Support Image"
          className="object-cover bg-center w-full"
        />
      </div>
      <div className="md:p-4 w-full flex-grow">
        <h2 className="heading-1">Support For Sustainability</h2>
        <p className="font-normal mb-5">
          Your donation can help us continue our important work in creating a
          sustainable future. Every contribution, no matter the size, makes a
          difference. Join us in our mission and make a donation today.
          Together, we can build a greener and more equitable world.
        </p>
        <DonatePageLink />
      </div>
    </div>
  );
};

export default DonateModal;
