import { logo_text_footer } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const footer_links: {
  name: string;
  links: {
    name: string;
    href: string;
  }[];
}[] = [
  {
    name: "Quick Links",
    links: [
      {
        name: "Home",
        href: "",
      },
      {
        name: "About Us",
        href: "",
      },
      {
        name: "Projects",
        href: "",
      },
      {
        name: "Our Initiatives",
        href: "",
      },
      {
        name: "Our Focus Area",
        href: "",
      },
      {
        name: "Contact Us",
        href: "",
      },
    ],
  },
  {
    name: "Useful Link",
    links: [
      {
        name: "Become a volunteer",
        href: "",
      },
      {
        name: "Become a donor",
        href: "",
      },
      {
        name: "See our works",
        href: "",
      },
      {
        name: "Case Studies",
        href: "",
      },
    ],
  },
  {
    name: "Useful Link",
    links: [
      {
        name: "Become a volunteer",
        href: "",
      },
      {
        name: "Become a donor",
        href: "",
      },
      {
        name: "See our works",
        href: "",
      },
      {
        name: "Case Studies",
        href: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-footer py-20 text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex gap-20">
          <div>
            <div className="max-w-[234px] mb-5">
              <Image
                src={logo_text_footer}
                alt="Seerakku Logo"
                className="w-full"
              />
            </div>
            <h2 className="heading-2">
              Committed to overcoming the stigma of AIDS
            </h2>
            <p className="text-white mb-5">
              Your donation can help us continue our important work in creating
              a sustainable future. Every contribution, no matter the size,
              makes a difference. Join us in our mission and make a donation
              today. Together, we can build a greener and more equitable world.
            </p>
            <button className="border border-white py-2 px-4">
              Subscribe for newsletter
            </button>
          </div>
          <div className="flex-grow flex-shrink-0">
            <div className="flex gap-5 mb-10 mx-auto justify-between">
              <Link href={""} className="text-white">
                Terms &amp; Conditions
              </Link>
              <Link href={""} className="text-white">
                Privacy Policy
              </Link>
              <Link href={""} className="text-white">
                Conflict of Interest Policy
              </Link>
              <Link href={""} className="text-white">
                Complaints Policy
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-20">
              {footer_links.map((link_block, index) => (
                <div className="" key={index}>
                  <h4 className="heading-3">{link_block.name}</h4>
                  <ul>
                    {link_block.links.map((link, index) => (
                      <li className="mb-3" key={index}>
                        <Link href={link.href} className="text-white">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
