import AddressMap from "@/features/contact_us/AddressMap";
import ContactForm from "@/features/contact_us/ContactForm";
import ContactInfo from "@/features/contact_us/ContactInfo";
import Hero from "@/features/contact_us/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

function ContactUs() {
  return (
    <main>
      <Hero />
      <ContactInfo />
      <ContactForm />
      <AddressMap />
    </main>
  );
}

export default ContactUs;
