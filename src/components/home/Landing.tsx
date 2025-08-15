"use client";
import Image from "next/image";
import landingPage from "@/public/home/WCHLanding.webp";
import { motion } from "motion/react";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut", type: "tween" }}
    >
      <div className="relative h-screen w-full">
        <Image
          src={landingPage}
          alt="Landing Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute flex h-full w-full items-center justify-center">
          <div className="flex h-1/3 w-1/3 place-items-center justify-center border-b-4 border-ula-yellow-primary text-center text-4xl font-bold text-white xl:text-6xl">
            UCR CSE's Undergraduate Learning Assistants
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Landing;
