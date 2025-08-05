import Image from "next/image";
import ulaMap from "@/public/home/ulaMap.svg";
import Button from "@/components/Button";

const Location = () => {
  return (
    <div className="flex w-full flex-col items-center justify-evenly bg-ula-blue-primary md:flex-row">
      <div className="flex flex-col items-center gap-8 px-8 pb-4 pt-8 md:w-2/5 md:pb-8">
        <div className="flex flex-col items-center justify-center gap-y-3 text-left tracking-wide text-white md:hidden md:text-2xl">
          <p>Your friendly neighborhood ULAs are ready to help!</p>
          <p>
            Just drop in to one of their help desk hours listed in the Calendar
            below with any questions you have.
          </p>
          <p>It’s free, and no advance registration required.</p>
          <p>
            Some sessions are held online through Zoom and others in Winston
            Chung Hall 129 and will start in Week 2 of every quarter.
          </p>
        </div>
        <p className="hidden text-left text-2xl tracking-wide text-white md:block">
          Your friendly neighborhood ULAs are ready to help! Just drop in to one
          of their help desk hours listed in the Calendar below with any
          questions you have. It’s free, and no advance registration required.
          Some sessions are held online through Zoom and others in Winston Chung
          Hall 129 and will start in Week 2 of every quarter.
        </p>

        <div className="hidden md:block">
          <Button text="Get help here!" link="/calendar" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 px-5 pb-8 md:w-2/5 md:p-8">
        <Image src={ulaMap} alt="ULA Map" />
        <p className="flex justify-center text-center text-xl font-medium text-white md:text-2xl">
          Find us at Room 129 on WCH Floor 1!
        </p>
        <div className="mt-2 md:hidden">
          <Button text="Get help here!" link="/calendar" />
        </div>
      </div>
    </div>
  );
};

export default Location;
