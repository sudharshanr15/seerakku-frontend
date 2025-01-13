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

  function closeToggle() {

    if(isAboutOpen)
      setIsAboutOpen(false);
    if(isInitiativesOpen)
      setIsInitiativesOpen(false);
  }

  function toggleAbout() {
    setIsAboutOpen((prevState) => !prevState);
    setIsInitiativesOpen(false);
  }

  function toggleInitiatives() {
    setIsInitiativesOpen((prevState) => !prevState);
    setIsAboutOpen(false)
  }

  const nav_links: {
    name: string;
    href: string;
  }[] = [
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
    <header onClick={closeToggle}
      className={` hidden lg:block absolute w-full py-6 bg-black z-50 font-big-noodle-titling`}
    >
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex justify-between  items-center gap-8   lg:text-white">
          <Link className=" flex justify-between pr-10" href={"/"}>
            <Image src={logo_text} alt="Seerakku Logo" />
          </Link>
          <ul className={`z-50 flex gap-6 lg:text-white`}>
            <li
              className="uppercase text-xl font-normal font-big-noodle-titling hover:text-primary"
            >
              <Link href="/about">About Us</Link>
            </li>
            <div className=" relative">
              <li
                onClick={toggleInitiatives}
                className="uppercase text-lg font-normal font-big-noodle-titling"
              >
                <Link className=" flex items-center gap-2 text-xl hover:text-primary " href="#">
                  <p>Our Initiatives </p>{" "}
                  <div
                    className={`bg-white w-1 h-1  rounded-full`}
                  ></div>
                </Link>
              </li>

              {isInitiativesOpen && (
                <ul className="absolute bg-white z-50 text-black rounded-md shadow-lg mt-2 w-36 flex flex-col gap-2 p-3">
                  <div className=" flex gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                  <Link href="/initiatives">
                    <li className=" text-lg ">Our Initiatives</li>
                  </Link>
                  <Link href="/gallery">
                    <li className=" text-lg ">Our Gallery</li>
                  </Link>
                </ul>
              )}
            </div>
            {nav_links.map((link, count) => (
              <li
                className="uppercase text-xl font-normal font-big-noodle-titling hover:text-primary"
                key={count}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className={` lg:opacity-100 z-50 `}>
            <DonateNow type="primary_green" className="me-4 text-xl text-black" />
            <Button className=" text-xl" type="primary">Become A Volunteer</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
