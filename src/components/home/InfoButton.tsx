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
          <p className="whitespace-nowrap text-lg">{text}</p>
        </div>

        <Image src={arrow} alt="arrow" className="ml-auto w-16 lg:w-20" />
      </div>
    </Link>
  );
};

export default InfoButton;
