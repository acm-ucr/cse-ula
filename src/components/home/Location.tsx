import Image from "next/image";
import ulaMap from "@/public/home/ulaMap.svg";
import Button from "@/components/Button";

const Location = () => {
  return (
    <div className="flex w-full flex-row items-center justify-evenly bg-ula-blue-primary p-1">
      <div className="flex w-1/2 flex-col items-center justify-center gap-8 bg-transparent p-6">
        <div className="flex w-4/5 items-center justify-center bg-transparent text-left text-lg leading-loose tracking-wide text-white">
          Your friendly neighborhood ULAs are ready to help! Just drop in to one
          of their help desk hours listed in the Calendar below with any
          questions you have. It's free, and no advance registration required.
          Some sessions are held online through Zoom and others in Winston Chung
          Hall 129, and will start in Week 2 of every quarter.
        </div>
        <Button text="Get help here!" />
      </div>
      <div className="flex w-2/5 flex-col items-center justify-center bg-transparent p-8">
        <Image src={ulaMap} alt={"ULA Map"} />
        <div className="flex items-center justify-center bg-transparent text-center text-2xl font-medium text-white">
          Find us at Room 129 on WCH Floor 1!
        </div>
      </div>
    </div>
  );
};
export default Location;
