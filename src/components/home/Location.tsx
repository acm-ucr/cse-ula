import Image from "next/image";
import ulaMap from "@/public/home/ulaMap.svg";

const Location = (props: { mapText: string }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-1 bg-ula-blue-primary p-8">
      <>
        <Image src={ulaMap} alt={"ulaMap"} />
      </>
      <div className="p-f flex items-center justify-center bg-transparent text-center text-white">
        {props.mapText}
      </div>
    </div>
  );
};
export default Location;
