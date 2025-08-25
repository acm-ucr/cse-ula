import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import arrow from "@/public/buttonArrow.svg";

interface infoButtonProps {
  icon: StaticImageData;
  text: string;
  link: string;
}

const InfoButton = ({ icon, text, link }: infoButtonProps) => {
  return (
    <Link href={link}>
      <div className="m-4 ml-auto flex justify-evenly px-4 py-5 shadow-lg">
        <div className="flex gap-5">
          <Image src={icon} alt="icon" className="h-8 w-8" />
          <p className="text-md whitespace-nowrap md:text-lg">{text}</p>
        </div>

        <Image src={arrow} alt="arrow" className="ml-auto" />
      </div>
    </Link>
  );
};

export default InfoButton;
