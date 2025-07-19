import { StaticImageData } from "next/image";
import Image from "next/image";

type ourGoalsProps = {
  image: StaticImageData;
  text: string;
};

const OurGoalsCard = ({ image, text }: ourGoalsProps) => {
  return (
    <div className="mx-8 flex w-1/4 flex-col items-center justify-center gap-y-4 border-y-4 border-ula-yellow-primary py-8 text-center text-xl font-medium">
      <Image src={image} alt="logo" />
      <div className="px-8">{text}</div>
    </div>
  );
};

export default OurGoalsCard;
