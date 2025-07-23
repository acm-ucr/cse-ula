import Image from "next/image";
import professorImage from "@/public/about/watkinsonMedina.webp";

const Professor = () => {
  return (
    <div className="mx-8 flex items-center gap-8">
      <Image
        src={professorImage}
        alt="Professor Watkinson Medina"
        className="mb-6 w-1/5 rounded-md"
      />
      <div className="w-4/5">
        <p className="text-xl font-medium text-black">
          "The ULA program is a great chance to make a real difference. Students
          get more personalized learning that helps with their classes, and ULAs
          get to grow as educators. All in all, the ULA program is a good thing
          for everyone who's part of it."
        </p>
        <p className="mt-2 text-right text-2xl font-medium">
          - Professor Watkinson Medina
        </p>
      </div>
    </div>
  );
};
export default Professor;
