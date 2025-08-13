"use client";
import { motion } from "motion/react";
import Image from "next/image";
import landingPage from "@/public/home/WCHLanding.webp";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut", type: "tween" }}
      className="relative h-screen w-full overflow-hidden"
    >
      <Image
        src={landingPage}
        alt="Landing Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="relative z-10 mx-auto flex h-full max-w-lg flex-col items-center justify-center px-4 text-center">
        <div className="text-5xl font-bold leading-snug tracking-wide text-white">
          UCR CSE's Undergraduate Learning Assistants
        </div>
        <div className="mt-6 h-1 w-3/4 bg-ula-yellow-primary"></div>
      </div>
    </motion.div>
  );
};
export default Landing;
