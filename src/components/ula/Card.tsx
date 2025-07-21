import Image from "next/image";
import Angel from "@/public/ulas/angel.webp";

const Card = () => {
  return (
    <div className="flex w-1/5 flex-col overflow-hidden rounded-xl">
      {/* image portion */}
      <div className="aspect-[4/3] bg-gray-300">
        <Image
          src={Angel}
          alt="Image of Angel"
          className="h-full w-full object-cover"
        />
      </div>
      {/* text portion */}
      <div className="h-1/8 flex flex-col items-center justify-center bg-gradient-to-t from-ula-yellow-primary to-ula-yellow-accent py-3 text-2xl font-bold">
        <div>{"Angel"}</div>
        <div>{"CS10ABC"}</div>
      </div>
    </div>
  );
};

export default Card;
