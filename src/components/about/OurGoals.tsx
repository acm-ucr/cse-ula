import { StaticImageData } from "next/image";
import Image from "next/image"

type OurGoalsProps = {
  image : StaticImageData;
  text: string;
}
const OurGoals = ({image, text}: OurGoalsProps) => {
  return (
  <div className="flex flex-col items-center justify-center border-y-4 mx-20 py-12 border-ula-yellow-primary font-medium">
    <Image src={image} alt="logo"/>
    {text}
  </div>
  );
};
export default OurGoals;
