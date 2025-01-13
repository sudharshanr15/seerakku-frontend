"use client";
import { useState } from "react";
import Link from "next/link";
import DonateNow from "./buttons/DonateNow";
import Button from "./buttons/Button";
import Image from "next/image";
import Menu from "@/assets/menu.png";
import Close from "@/assets/close.png";
import { logo_text } from "@/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isInitiativesOpen, setIsInitiativesOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function toggleAbout() {
    setIsAboutOpen((prevState) => !prevState);
  }

  function toggleInitiatives() {
    setIsInitiativesOpen((prevState) => !prevState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsInitiativesOpen(false);
  }
  const nav_links: {
    name: string;
    href: string;
  }[] = [
    {
      name: "About Us",
      href: "/about"
    },
    {
      name: "Our Focus Area",
      href: "our_focus",
    },
    {
      name: "Get Involved",
      href: "get_involved",
    },
    {
      name: "Contact Us",
      href: "contact_us",
    },
  ];
  return (
    <header
      className={` ${isMenuOpen ? "bg-white overflow-y-hidden" : "bg-black"} block lg:hidden absolute w-full py-6 bg-transparent z-50  font-big-noodle-titling`}
    >
      <div className="max-w-screen-xl mx-auto">
        <nav className=" flex flex-col justify-between pl-8 lg:items-center gap-8 ">

         <div className=" flex justify-between pr-6">
           <Link onClick={closeMenu} className=" " href={"/"}>
            <Image src={logo_text} alt="Seerakku Logo" />
            </Link>
            <Image
              onClick={toggleMenu}
              className=" object-contain"
              src={isMenuOpen ? Close : Menu}
              alt="Menu"
              />
              </div>
          <ul
            className={` ${isMenuOpen ? "flex" : "hidden"} z-50 flex  flex-col gap-6 `}
          >
            <div className=" relative">
              <li
                onClick={toggleInitiatives}
                className="uppercase text-lg font-normal font-big-noodle-titling"
              >
                <div className=" flex items-center gap-2 ">
                  <p>Our Initiatives </p>{" "}
                  <div
                    className={` bg-primary w-1 h-1  rounded-full`}
                  ></div>
                </div>
              </li>

              {isInitiativesOpen && (
                <ul className=" bg-white z-50 text-black  mt-2 w-36 flex flex-col gap-2 p-3">
                  <div className=" flex gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                  <Link onClick={closeMenu} href="/initiatives">
                    <li className=" text-lg">Our Initiatives</li>
                  </Link>
                  <Link onClick={closeMenu} href="/gallery">
                    <li className=" text-lg">Our Gallery</li>
                  </Link>
                </ul>
              )}
            </div>
            {nav_links.map((link, count) => (
              <li
                className="uppercase text-lg font-normal font-big-noodle-titling"
                key={count}
              >
                <Link onClick={closeMenu} href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div
            className={` ${isMenuOpen ? "block" : "hidden"} z-50 `}
          >
            <DonateNow type="primary_green" className="me-4 text-black" />
            <Button type="primary">Become A Volunteer</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
