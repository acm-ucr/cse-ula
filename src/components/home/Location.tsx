import Image from "next/image";
import ulaMap from "@/public/home/ulaMap.svg";
import Button from "@/components/Button";

const textLines = [
  "Your friendly neighborhood ULAs are ready to help!",
  "Just drop in to one of their help desk hours listed in the Calendar below with any questions you have.",
  "It’s free, and no advance registration required.",
  "Some sessions are held online through Zoom and others in Winston Chung Hall 129 and will start in Week 2 of every quarter.",
];

const Location = () => {
  return (
    <div className="flex w-full flex-col items-center justify-evenly bg-ula-blue-primary md:flex-row">
      <div className="flex flex-col items-center gap-8 p-8 md:w-2/5">
        <div className="flex flex-col items-center justify-center text-left tracking-wide text-white md:hidden md:text-2xl">
          {textLines.map((line, i) => (
            <div key={i} className="mb-3">
              {line}
            </div>
          ))}
        </div>
        <div className="hidden text-left text-2xl tracking-wide text-white md:block">
          {textLines.join(" ")}
        </div>
        <div className="hidden md:block">
          <Button text="Get help here!" link="/calendar" />
        </div>
      </div>
      <div className="flex flex-col items-center px-8 pb-8 md:w-2/5 md:p-8">
        <Image src={ulaMap} alt={"ULA Map"} />
        <p className="flex justify-center text-center text-xl font-medium text-white md:text-2xl">
          Find us at Room 129 on WCH Floor 1!
        </p>
      </div>
    </div>
  );
};
export default Location;
