import Image from "next/image";

const Professor = () => {
  return (
    <div className="flex flex-col items-center bg-white px-4 py-10">
      <Image
        src="/about/watkinsonMedina.webp"
        alt="Professor Watkinson Medina"
        width={200}
        height={200}
        className="mb-6 rounded-sm object-cover"
      />
      <div className="max-w-2xl text-center">
        <p className="text-lg font-medium leading-relaxed text-black">
          "The ULA program is a great chance to make a real difference. Students
          get more personalized learning that helps with their classes, and ULAs
          get to grow as educators. All in all, the ULA program is a good thing
          for everyone who's part of it."
        </p>
        <p className="mt-2 text-right font-medium">
          -Professor Watkinson Medina
        </p>
      </div>
    </div>
  );
};
export default Professor;
