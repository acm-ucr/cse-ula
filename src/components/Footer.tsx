import Image from "next/image";
import riversideLogo from "@/public/riversideLogo.webp";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-ula-blue-primary p-8 text-white">
      <div className="flex flex-col items-center justify-center">
        <Image src={riversideLogo} alt="Logo of UCR" />
        <div className="w-3/4 text-center text-xl">
          Undergraduate Learning Assistants
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="border-r-2 p-4 text-2xl font-bold">WCH Room 129</div>
        <Link href="https://discord.com/invite/BUvwNdB6eH">
          <FaDiscord size={50} />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
