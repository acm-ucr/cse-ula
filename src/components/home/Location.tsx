import Image from "next/image";
import ulaMap from "@/public/home/ulaMap.svg";

const Location = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-ula-blue-primary p-8">
      <Image src={ulaMap} alt={"ULA Map"} />
      <div className="flex items-center justify-center bg-transparent text-center text-white">
        Find us at Room 129 on WCH Floor 1!
      </div>
    </div>
  );
};
export default Location;
