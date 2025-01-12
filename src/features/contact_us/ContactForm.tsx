"use client";

import SocialLinks from "@/components/SocialLinks";
import FormInput from "@/components/FormInput";
import Button from "@/components/buttons/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addRecord } from "@/features/contact_us/actions/Contact";
import { contact_schema, ContactType } from "./types";
import { toast } from "react-toastify";
import { useState } from "react";

function ContactForm() {
  const [isSubmitting, setisSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<ContactType>({
    resolver: zodResolver(contact_schema),
  });

  function onSubmit(data: ContactType) {
    setisSubmitting(true)

    addRecord(data).then(res => {
      setValue("full_name", "")
      setValue("email", "")
      setValue("mobile_no", "")
      setValue("about", "")

      toast.success("Your message has been sent successfully.")

    }).catch(err => {
      toast.error("Oops! Something went wrong. Please try submitting your message again.")
    }).finally(() => {
      setisSubmitting(false)
    })
  }

  return (
    <section className="layout-section-xl pt-0">
      <div className="lg:flex">
        <div className="w-full lg:w-1/2 p-10 contact-form-desc relative">
          <div className="absolute top-0 left-0 w-full h-full z-0 bg-primary bg-opacity-80"></div>
          <div className="h-full flex items-end text-white relative z-10">
            <div>
              <p className="text-30 mb-2">Get in touch with us</p>
              <h2 className="heading-2">
                Interested in our work at Seeraku? For any questions or
                thoughts, we‘d love to hear from you.
              </h2>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-primary bg-opacity-20 p-10">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <FormInput
                type="text"
                placeholder="Full Name"
                name="full_name"
                error={errors.full_name}
                register={register}
              />
            </div>
            <div className="mb-6">
              <FormInput
                type="email"
                placeholder="Email Address"
                register={register}
                name="email"
                error={errors.email}
              />
            </div>
            <div className="mb-6">
              <FormInput
                placeholder="Mobile Number"
                register={register}
                name="mobile_no"
                error={errors.mobile_no}
              />
            </div>
            <div className="mb-6">
              <textarea
                className="border border-black border-opacity-20 w-full placeholder:text-black px-5 py-2 bg-transparent"
                placeholder="Tell us about yourself"
                {...register("about")}
              ></textarea>
            </div>
            <Button button_type="submit" type="primary_green" disabled={isSubmitting}>
              Send Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
