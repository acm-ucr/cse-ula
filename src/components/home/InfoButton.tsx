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
      <div className="m-4 flex w-2/5 items-center justify-between px-6 py-5 shadow-lg">
        <div className="flex items-center gap-3">
          <Image src={icon} alt="icon" className="h-8 w-8" />
          <p className="text-lg">{text}</p>
        </div>

        <Image src={arrow} alt="arrow" className="ml-auto" />
      </div>
    </Link>
  );
};

export default InfoButton;
