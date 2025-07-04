import { StaticImageData } from "next/image";
import Image from "next/image";

type OurGoalsProps = {
  image: StaticImageData;
  text: string;
};
const OurGoalsProps = ({ image, text }: OurGoalsProps) => {
  return (
    <div className="mx-24 flex flex-col items-center justify-center gap-y-4 border-y-[5px] border-ula-yellow-primary py-10 text-center text-xl font-medium">
      <Image src={image} alt="logo" />
      <div className="px-10">{text}</div>
    </div>
  );
};
export default OurGoalsProps;
