"use client";
import { useState } from "react";
import Link from "next/link";
import DonateNow from "./buttons/DonateNow";
import { ButtonType } from "./buttons/type";
import Button from "./buttons/Button";
import Image from "next/image";
import Menu from '@/assets/menu.png'
import Close from '@/assets/close.png'
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

  const nav_links: {
    name: string;
    href: string;
  }[] = [
    {
      name: "Our Focus Area",
      href: "",
    },
    {
      name: "Get Involved",
      href: "",
    },
    {
      name: "Contact Us",
      href: "",
    },
  ];
  return (
    <header className={` ${isMenuOpen ? "  bg-transparent text-white" : " bg-white fixed"}  absolute w-full py-6 bg-transparent z-40 font-big-noodle-titling`}>
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex flex-col lg:flex-row justify-between pl-10 lg:pl-0 lg:items-center gap-8   lg:text-white">
          <Link className=" flex justify-between pr-10" href={"/"}>
            <Image src={logo_text} alt="Seerakku Logo" />
            <Image onClick={toggleMenu} className=" object-contain lg:hidden" src={isMenuOpen ? Menu : Close} alt="Menu" />
          </Link>
          <ul className={` ${isMenuOpen ? "opacity-0" : " opacity-100 z-40"} lg:opacity-100 z-40 flex lg:flex-row flex-col gap-6 lg:text-white`}>
            <div className=" relative">
              <li
                onClick={toggleAbout}
                className="uppercase text-lg font-normal font-big-noodle-titling"
              >
                <Link className=" flex items-center gap-2 " href="#">
                  <p>About Us </p>{" "}
                  <div className={` ${isMenuOpen ? "bg-white" : "bg-primary"} w-1 h-1  rounded-full`}></div>
                </Link>
              </li>

              {isAboutOpen && (
                <ul className="absolute bg-white z-50 text-black rounded-md shadow-lg mt-2 w-36 flex flex-col gap-2 p-3">
                  <div className=" flex gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                  <a href="#">
                    <li className=" text-lg">Who we are</li>
                  </a>
                  <a href="#">
                    <li className=" text-lg">What we do</li>
                  </a>
                </ul>
              )}
            </div>
            <div className=" relative">
              <li
                onClick={toggleInitiatives}
                className="uppercase text-lg font-normal font-big-noodle-titling"
              >
                <Link className=" flex items-center gap-2 " href="#">
                  <p>Our Initiatives </p>{" "}
                  <div className={` ${isMenuOpen ? "bg-white" : "bg-primary"} w-1 h-1  rounded-full`}></div>
                </Link>
              </li>

              {isInitiativesOpen && (
                <ul className="absolute bg-white z-50 text-black rounded-md shadow-lg mt-2 w-36 flex flex-col gap-2 p-3">
                  <div className=" flex gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  </div>
                  <a href="#">
                    <li className=" text-lg">Our Initiatives</li>
                  </a>
                  <a href="#">
                    <li className=" text-lg">Our Gallery</li>
                  </a>
                </ul>
              )}
            </div>
            {nav_links.map((link, count) => (
              <li
                className="uppercase text-lg font-normal font-big-noodle-titling"
                key={count}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className={`${isMenuOpen ? "opacity-0" : " opacity-100 z-40"} lg:opacity-100 z-40 `}>
            <DonateNow
              type={ButtonType.primary_green}
              className="me-4 text-black"
            />
            <Button type={ButtonType.primary}>Become A Volunteer</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
