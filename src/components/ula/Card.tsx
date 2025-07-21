"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import Angel from "@/public/ulas/angel.webp";

const Card = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      animate={{ rotateY: flipped ? 180 : 0 }}
      onClick={() => setFlipped((prevState) => !prevState)}
      className="relative m-4 flex cursor-pointer flex-col items-center"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex w-1/5 flex-col overflow-hidden rounded-xl" 
      style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
      >
        <div className="aspect-[4/3]">
          <Image
            src={Angel}
            alt="Image of Angel"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-1/8 flex flex-col items-center justify-center bg-ula-yellow-accent py-3 text-2xl font-bold">
          <div>{"Angel"}</div>
          <div>{"CS10ABC"}</div>
        </div>
      </div>
      <div
        className="absolute flex w-1/5 items-center justify-center rounded-xl border-8 border-ula-yellow-accent text-center text-base"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        {
          "Hi! My name is Angel Franco and I am a 3rd year Math major with a concentration in Computational Math. I became a ULA because I like to help. If you ever need help with CS10ABC I got you! If you like One Piece we can talk about that too! (Just don't spoil because I don't read the Manga)"
        }
      </div>
    </motion.div>
  );
};

export default Card;
