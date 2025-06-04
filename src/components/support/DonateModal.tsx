"use client";

import Image from "next/image";
import { support_image } from "@/assets";
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
        <h2 className="heading-1">Your Contribution Fuels Change</h2>
        <p className="font-normal mb-5">
          Every rupee you donate helps us restore ecosystems, empower communities, and combat climate change. From planting trees to supporting underprivileged farmers, your generosity drives our mission forward.
        </p>
        <DonatePageLink />
      </div>
    </div>
  );
};

export default DonateModal;
