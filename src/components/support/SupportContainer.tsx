"use client";

import Image from "next/image";
import { support_image } from "@/assets";
import { useEffect, useState } from "react";
import DonateNow from "@/components/buttons/DonateNow";
import ShadowContainer from "@/components/ShadowContainer";
import { ColorType } from "@/types/ColorType";
import DonatePageLink from "../buttons/DonatePageLink";

const amount_options: {
  name: string;
  amount: number;
}[] = [
  {
    name: "50",
    amount: 50,
  },
  {
    name: "100",
    amount: 100,
  },
  {
    name: "200",
    amount: 200,
  },
  {
    name: "500",
    amount: 500,
  },
];

const SupportContainer = () => {
  const [amount, setAmount] = useState(50);

  useEffect(() => {}, [amount]);

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
        <form className="">
          <div className="mb-2">
            <label
              className="font-bold text-xl block mb-4"
              htmlFor="donate_amt"
            >
              I would like to give
            </label>
            <div className="flex gap-2 mb-4 ">
              {amount_options.map((option, index) => (
                <button
                  type="button"
                  className={`${option.amount == amount ? "bg-primary" : "outline outline-black outline-1"} py-2 px-4 text-black`}
                  key={index}
                  onClick={() => setAmount(option.amount)}
                >
                  &#8377;{option.name}
                </button>
              ))}
            </div>
            <input
              type="text"
              className="text-center bg-neutral-100 p-2 mb-4"
              placeholder="Enter your amount"
              id="donate_amt"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <DonatePageLink />
        </form>
      </div>
    </div>
  );
};

export default SupportContainer;
