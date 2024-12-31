import SocialLinks from "@/components/SocialLinks";
import FormInput from "./FormInput";
import Button from "@/components/buttons/Button";

function ContactForm() {
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
          <form className="">
            <div className="mb-6">
              <FormInput placeholder="Full Name" />
            </div>
            <div className="mb-6">
              <FormInput type="email" placeholder="Email Address" />
            </div>
            <div className="mb-6">
              <FormInput type="text" placeholder="Mobile Number" />
            </div>
            <div className="mb-6">
              <textarea
                className="border border-black border-opacity-20 w-full placeholder:text-black px-5 py-2 bg-transparent"
                placeholder="Tell us about yourself"
              ></textarea>
            </div>
            <Button type="primary_green">Send Now</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
