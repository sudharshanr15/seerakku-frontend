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
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 bg-white">
      <ShadowContainer theme={ColorType.primary} shadowTo="left">
        <Image
          src={support_image}
          alt="Support Image"
          className="w-full h-full object-cover bg-center"
        />
      </ShadowContainer>
      <div className="md:p-4 max-md:mt-4">
        <h2 className="heading-2">Your Contribution Fuels Change</h2>
        <p className="font-normal mb-7">
          Every rupee you donate helps us restore ecosystems, empower communities, and combat climate change. From planting trees to supporting underprivileged farmers, your generosity drives our mission forward.
        </p>
        <DonatePageLink />
      </div>
    </div>
  );
};

export default SupportContainer;
