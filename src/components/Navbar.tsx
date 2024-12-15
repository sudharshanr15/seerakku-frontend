import Link from "next/link";
import DonateNow from "./buttons/DonateNow";
import { ButtonType } from "./buttons/type";
import Button from "./buttons/Button";

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
    <header className="w-full py-6 bg-black z-50">
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex justify-between items-center gap-8 text-white">
          <Link href={"/"}>Home</Link>
          <ul className="flex gap-6 text-white">
            {nav_links.map((link, count) => (
              <li className="uppercase text-lg font-normal" key={count}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div>
            <DonateNow
              type={ButtonType.secondary_silver_green}
              className="me-4"
            />
            <Button type={ButtonType.primary}>Become A Volunteer</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
