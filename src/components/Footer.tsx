import { logo_text_footer } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

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
        href: "/",
      },
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Projects",
        href: "/whatwedo",
      },
      {
        name: "Our Initiatives",
        href: "/initiatives",
      },
      {
        name: "Our Focus Area",
        href: "/our_focus",
      },
      {
        name: "Contact Us",
        href: "/contact_us",
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
        href: "/gallery#ourworks",
      },
      {
        name: "Case Studies",
        href: "",
      },
    ],
  },
];

const quick_links: {
  name: string;
  href: string;
}[] = [
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Conflict of Interest Policy",
    href: "",
  },
  {
    name: "Complaints Policy",
    href: "",
  },
];

const Footer = () => {
  function QuickLinks({ className }: { className?: string }) {
    return (
      <div className={`flex flex-wrap gap-7 ${className} xl:justify-between`}>
        {quick_links.map((link, index) => (
          <Link
            href={link.href}
            className="text-white whitespace-nowrap"
            key={index}
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <footer className="bg-footer text-white">
      <div className="layout-section-xl">
        <div className="w-full flex flex-col xl:flex-row xl:justify-between xl:items-center mb-6">
          <div className="max-w-[234px] mb-6 xl:m-0">
            <Link href={'/'}>
            <Image
              src={logo_text_footer}
              alt="Seerakku Logo"
              className="w-full"
              />
              </Link>
          </div>
          <QuickLinks />
        </div>
        <div className="flex flex-col xl:flex-row gap-7 xl:gap-20">
          <div className="flex flex-col gap-6 items-start">
            <h2 className="heading-2 m-0">
              Committed to overcoming the stigma of AIDS
            </h2>
            <p className="text-white">
              Your donation can help us continue our important work in creating
              a sustainable future. Every contribution, no matter the size,
              makes a difference. Join us in our mission and make a donation
              today. Together, we can build a greener and more equitable world.
            </p>
            {/* <button className="border border-white py-2 px-4">
              Subscribe for newsletter
            </button> */}
            <SocialLinks />
          </div>
          <div className="flex-grow flex-shrink-0">
            {/* <QuickLinks className="mb-10 hidden xl:flex" /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 xl:gap-20">
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
