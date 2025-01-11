"use client";

import Image from "next/image";
import { support_image } from "@/assets";
import DonateNow from "@/components/buttons/DonateNow";
import { useEffect } from "react";

const DonateModal = () => {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm?.hasChildNodes()) {

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_Pi2BCjz6jR5b16";
      rzpPaymentForm!.appendChild(script);

    }

  });

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
        <form id="rzp_payment_form">
        </form>
      </div>
    </div>
  );
};

export default DonateModal;
