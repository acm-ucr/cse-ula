import Image from "next/image";
import ulaMap from "@/public/home/ulaMap.svg";
import Button from "@/components/Button";

const Location = () => {
  return (
    <div className="flex w-full flex-row items-center justify-evenly bg-ula-blue-primary">
      <div className="flex w-2/5 flex-col items-center gap-8 p-6">
        <p className="flex items-center justify-center text-left text-2xl tracking-wide text-white">
          Your friendly neighborhood ULAs are ready to help! Just drop in to one
          of their help desk hours listed in the Calendar below with any
          questions you have. It's free, and no advance registration required.
          Some sessions are held online through Zoom and others in Winston Chung
          Hall 129, and will start in Week 2 of every quarter.
        </p>
        <Button text="Get help here!" link="/calendar" />
      </div>
      <div className="flex w-2/5 flex-col items-center p-8">
        <Image src={ulaMap} alt={"ULA Map"} />
        <p className="flex justify-center text-center text-2xl font-medium text-white">
          Find us at Room 129 on WCH Floor 1!
        </p>
      </div>
    </div>
  );
};
export default Location;
