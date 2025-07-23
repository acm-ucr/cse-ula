"use client";
import Link from "next/link";
import { items } from "@/data/NavbarData";
import { usePathname } from "next/navigation";
import { FaDiscord, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative bg-ula-blue-primary px-5 py-4 font-medium text-white">
      <div className="hidden w-full items-center justify-between md:flex">
        <div className="mx-5 flex gap-10 text-2xl">
          {items.map(({ name, link }) => (
            <Link
              key={name}
              href={link}
              className={`${
                pathname === link
                  ? "text-ula-yellow-accent"
                  : "hover:text-gray-300"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="mx-5 text-5xl">
          <Link href="https://discord.com/invite/BUvwNdB6eH" target="_blank">
            <FaDiscord />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between md:hidden">
        <div className="text-2xl font-bold">ULA</div>
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`absolute left-0 top-full z-50 w-full overflow-hidden bg-ula-blue-primary transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-2 flex flex-col items-center gap-6 border-t-2 py-4 text-xl">
          {items.map(({ name, link }) => (
            <Link
              key={name}
              href={link}
              onClick={() => setIsOpen(false)}
              className={`${
                pathname === link
                  ? "text-ula-yellow-accent"
                  : "hover:text-gray-300"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
