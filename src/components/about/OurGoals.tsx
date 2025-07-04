import { StaticImageData } from "next/image";
import Image from "next/image";

type OurGoalsProps = {
  image: StaticImageData;
  text: string;
};
const OurGoals = ({ image, text }: OurGoalsProps) => {
  return (
    <div className="mx-20 flex flex-col items-center justify-center border-y-4 border-ula-yellow-primary py-12 font-medium">
      <Image src={image} alt="logo" />
      {text}
    </div>
  );
};
export default OurGoals;
