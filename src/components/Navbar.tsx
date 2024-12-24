import Link from "next/link";
import DonateNow from "./buttons/DonateNow";
import { ButtonType } from "./buttons/type";
import Button from "./buttons/Button";
import Image from "next/image";
import { logo_text } from "@/assets";

const Navbar = () => {
  const nav_links: {
    name: string;
    href: string;
  }[] = [
    {
      name: "About Us",
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
      name: "Get Involved",
      href: "",
    },
    {
      name: "Contact Us",
      href: "",
    },
  ];
  return (
    <header className="absolute w-full py-6 bg-transparent z-50 font-big-noodle-titling">
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex justify-between items-center gap-8 text-white">
          <Link href={"/"}>
            <Image src={logo_text} alt="Seerakku Logo" />
          </Link>
          <ul className="flex gap-6 text-white">
            {nav_links.map((link, count) => (
              <li
                className="uppercase text-lg font-normal font-big-noodle-titling"
                key={count}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div>
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
