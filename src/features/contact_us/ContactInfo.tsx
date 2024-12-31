import { location, mail_arrow_right, phone_call } from "@/assets/icons";
import Image from "next/image";

const contactInfo = [
  {
    title: "Mail Us",
    info: "climateaction@seerakku.in",
    icon: mail_arrow_right,
  },
  {
    title: "Call Us",
    info: "+91 6379248007",
    icon: phone_call,
  },
  {
    title: "Address",
    info: "Chennai, Tamilnadu, India",
    icon: location,
  },
];

function ContactInfo() {
  return (
    <section className="layout-section-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {contactInfo.map((contact, index) => (
          <div className="bg-secondary-light-green p-9 md:p-10" key={index}>
            <div className="max-w-14 mb-16">
              <Image
                src={contact.icon}
                alt={contact.title}
                className="w-full"
              />
            </div>
            <h2 className="heading-2 mb-3">{contact.title}</h2>
            <p className="text-xl">{contact.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactInfo;
