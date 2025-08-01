"use client";
import Image from "next/image";
import professorImage from "@/public/about/watkinsonMedina.webp";

import { motion } from "motion/react";

const Professor = () => {
  return (
    <div className="mx-8 mb-4 flex flex-row justify-center gap-8 xl:flex-row xl:items-center">
      <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5}}
              viewport={{ once: true }}>
        <Image
          src={professorImage}
          alt="Professor Watkinson Medina"
          className="mb-4 w-full rounded-md font-sm xl:w-3/4 "
        />
      </motion.div>
      
      
      <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              viewport={{ once: true }}>

        <div className="w-full xl:w-4/5">
          <p className="text-lg text-left font-xl text-black xl:text-2xl">
            "The ULA program is a great chance to make a real difference. Students
            get more personalized learning that helps with their classes, and ULAs
            get to grow as educators. All in all, the ULA program is a good thing
            for everyone who's part of it."
          </p>
          <p className="mt-2 text-right text-black font-xs xl:text-xl">
            - Professor Watkinson Medina
          </p>
        </div>
      </motion.div>

      
    </div>
  );
};
export default Professor;
