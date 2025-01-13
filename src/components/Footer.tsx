"use client";

import { logo_text_footer } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { logo_text } from "@/assets";
import { useDonateModal } from "./modal/DonateModalProvider";

const quick_links_desc: {
    name: string;
    href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
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
];

const useful_links_desc: {
  name: string;
  href: string;
}[] =   [
  {
    name: "Become a volunteer",
    href: "",
  },
  {
    name: "Become a Partner",
    href: "",
  },
  {
    name: "See our works",
    href: "/gallery#ourworks",
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
];

const Footer = () => {
  const { open } = useDonateModal();

  function QuickLinks({ className }: { className?: string }) {
    return (
      <div className={`flex flex-wrap gap-7 ${className} xl:justify-start`}>
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
        <div className="flex flex-col xl:flex-row gap-7 xl:gap-20">
          <div>
            <div className="max-w-[234px] mb-6">
              <Link href={'/'}>
              <Image
                src={logo_text}
                alt="Seerakku Logo"
                className="w-auto"
                />
                </Link>
            </div>
            <div className="flex flex-col gap-6 items-start">
              <div className="xl:hidden">
                <QuickLinks />
              </div>
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
          </div>
          <div className="flex-grow flex-shrink-0">
              {/* <QuickLinks className="mb-10 hidden xl:flex" /> */}
              <div className="hidden xl:block mb-6">
                <QuickLinks />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 xl:gap-20">
                  <div className="">
                    <h4 className="heading-3">Quick Links</h4>
                    <ul>
                      {quick_links_desc.map((link, index) => (
                        <li className="mb-3" key={index}>
                          <Link href={link.href} className="text-white">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="">
                    <h4 className="heading-3">Useful Links</h4>
                    <ul>
                      <li className="mb-3">
                        <button className="text-white" onClick={open}>
                          Become a Donor
                        </button>
                      </li>

                      {useful_links_desc.map((link, index) => (
                        <li className="mb-3" key={index}>
                          <Link href={link.href} className="text-white">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
