import Image from "next/image";
import { StaticImageData } from "next/image";
import arrow from "@/public/buttonArrow.svg";

interface infoButtonProps {
  icon: StaticImageData;
  text: string;
}

const InfoButton = ({ icon, text }: infoButtonProps) => {
  return (
    <div className="m-4 flex w-[42%] items-center justify-between border bg-white px-6 py-5 shadow-lg">
      <div className="flex items-center gap-3">
        <Image src={icon} alt="icon" className="h-8 w-8" />
        <p className="text-lg font-medium text-black">{text}</p>
      </div>

      <Image src={arrow} alt="arrow" className="ml-auto w-12" />
    </div>
  );
};

export default InfoButton;
