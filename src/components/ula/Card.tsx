"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface ulaCardProps {
  image: StaticImageData;
  name: string;
  classes: string;
  description: string;
}

const Card = ({ image, name, classes, description }: ulaCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      onClick={() => setFlipped((prevState) => !prevState)}
      className="relative m-4 flex w-[20vw] cursor-pointer flex-col items-center justify-center"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="flex flex-col overflow-hidden rounded-xl"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
      >
        <div className="aspect-[4/3]">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-1/8 flex flex-col items-center justify-center bg-ula-yellow-accent py-3 text-2xl font-bold shadow-[0_-20px_40px_rgba(255,200,0,.8)]">
          <p>{name}</p>
          <p>{classes}</p>
        </div>
      </div>
      <div
        className="absolute flex h-full items-center justify-center rounded-xl border-8 border-ula-yellow-accent text-center text-base"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        {description}
      </div>
    </motion.div>
  );
};

export default Card;
