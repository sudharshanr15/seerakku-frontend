import AddressMap from "@/features/contact_us/AddressMap";
import ContactForm from "@/features/contact_us/ContactForm";
import ContactInfo from "@/features/contact_us/ContactInfo";
import Hero from "@/features/contact_us/Hero";

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
