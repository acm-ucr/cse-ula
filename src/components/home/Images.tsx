import ulaPic1 from "@/public/home/ulaPic1.webp";
import ulaPic2 from "@/public/home/ulaPic2.webp";
import Image from "next/image";

const Images = () => {
  return (
    <div className="flex flex-col place-items-center gap-8 py-12">
      <div className="w-1/2 border-b-4 border-ula-blue-primary" />
      <div className="flex w-5/6 flex-col justify-center gap-8 md:w-1/3 md:flex-row">
        <Image src={ulaPic1} alt="Ula Picture 1" />
        <Image src={ulaPic2} alt="Ula Picture 2" />
      </div>
    </div>
  );
};
export default Images;
