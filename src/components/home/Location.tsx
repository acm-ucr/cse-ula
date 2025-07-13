import Image from "next/image";
import ulaMap from "@/public/home/ulaMap.svg";

const Location = (props: { mapText: string }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-1 bg-ula-blue-primary p-8">
      <>
        <Image src={ulaMap} alt={"ulaMap"} />
      </>
      <div className="flex items-center justify-center bg-transparent text-center text-white p-f">
        {props.mapText}
      </div>
    </div>
  );
};
export default Location;
