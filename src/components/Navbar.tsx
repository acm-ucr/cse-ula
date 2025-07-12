"use client";
import Link from "next/link";
import { items } from "@/data/NavbarData";
import { usePathname } from "next/navigation";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-between bg-ula-blue-primary px-5 py-4 font-medium">
      <div className="mx-5 grid grid-flow-col gap-10 text-2xl text-white">
        {items.map(({ name, link }) => (
          <Link
            key={name}
            href={link}
            className={`${
              pathname === link ? "text-[#F7C55B]" : "hover:text-gray-300"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="mx-5">
        <Link
          href="https://discord.com/invite/BUvwNdB6eH"
          target="_blank"
        >
          <span className="text-5xl text-white hover:text-gray-300">
            <FaDiscord />
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
