"use client";

import Image from "next/image";
import { support_image } from "@/assets";
import { useEffect, useState } from "react";
import DonateNow from "@/components/buttons/DonateNow";
import ShadowContainer from "@/components/ShadowContainer";
import { ColorType } from "@/types/ColorType";
import DonatePageLink from "../buttons/DonatePageLink";

const SupportContainer = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-white">
      <ShadowContainer theme={ColorType.primary} shadowTo="left">
        <Image
          src={support_image}
          alt="Support Image"
          className="w-full h-full object-cover bg-center"
        />
      </ShadowContainer>
      <div className="md:p-4 max-md:mt-4">
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

export default SupportContainer;
