import { StaticImageData } from "next/image";
import Image from "next/image";

type ourGoalsProps = {
  image: StaticImageData;
  text: string;
};

const OurGoalsCard = ({ image, text }: ourGoalsProps) => {
  return (
    <div className="mx-8 my-8 flex min-h-[283px] w-1/4 min-w-[245px] flex-col items-center justify-center gap-y-4 border-y-4 border-ula-yellow-primary text-center text-xl font-medium md:py-8">
      <Image src={image} alt="logo" />
      <div className="px-8">{text}</div>
    </div>
  );
};

export default OurGoalsCard;
