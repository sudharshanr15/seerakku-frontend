"use client";

import SocialLinks from "@/components/SocialLinks";
import FormInput from "@/components/FormInput";
import Button from "@/components/buttons/Button";
import { useForm } from "react-hook-form";
import { coerce, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function ContactForm() {
  const contact_schema = z.object({
    full_name: z
      .string()
      .min(3, { message: "Full Name must contain at least 3 character(s)" }),
    email: z.string().email(),
    mobile_no: z
      .string()
      .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)),
    bio: z.string().optional(),
  });

  type ContactType = z.infer<typeof contact_schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactType>({
    resolver: zodResolver(contact_schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <section className="layout-section-xl pt-0">
      <div className="flex">
        <div className="w-full xl:w-1/2 p-10 contact-form-desc relative">
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
        <div className="w-full xl:w-1/2 bg-primary bg-opacity-20 p-10">
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
                {...register("bio")}
              ></textarea>
            </div>
            <Button button_type="submit" type="primary_green">
              Send Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
