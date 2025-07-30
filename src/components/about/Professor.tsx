import Image from "next/image";
import professorImage from "@/public/about/watkinsonMedina.webp";

const Professor = () => {
  return (
    <div className="mx-8 mb-4 flex flex-col justify-center gap-8 xl:flex-row xl:items-center">
      <Image
        src={professorImage}
        alt="Professor Watkinson Medina"
        className="mb-4 w-full rounded-md xl:w-1/5"
      />
      <div className="w-full xl:w-4/5">
        <p className="text-lg font-medium text-black xl:text-xl">
          "The ULA program is a great chance to make a real difference. Students
          get more personalized learning that helps with their classes, and ULAs
          get to grow as educators. All in all, the ULA program is a good thing
          for everyone who's part of it."
        </p>
        <p className="mt-2 text-right text-xl font-medium xl:text-2xl">
          - Professor Watkinson Medina
        </p>
      </div>
    </div>
  );
};
export default Professor;
