"use client";
import Image from "next/image";
import professorImage from "@/public/about/watkinsonMedina.webp";
import { motion } from "motion/react";

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const Professor = () => {
  return (
    <div className="mx-8 mb-4 flex flex-row justify-center gap-8 xl:flex-row xl:items-center">
      <FadeIn>
        <Image
          src={professorImage}
          alt="Professor Watkinson Medina"
          className="font-sm mb-4 w-full rounded-md xl:w-3/4"
        />
      </FadeIn>

      <FadeIn>
        <p className="font-xl text-left text-lg text-black xl:text-2xl">
          "The ULA program is a great chance to make a real difference. Students
          get more personalized learning that helps with their classes, and ULAs
          get to grow as educators. All in all, the ULA program is a good thing
          for everyone who's part of it."
        </p>
        <p className="font-xs mt-2 text-right text-black xl:text-xl">
          - Professor Watkinson Medina
        </p>
      </FadeIn>
    </div>
  );
};

export default Professor;
