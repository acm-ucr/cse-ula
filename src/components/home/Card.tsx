"use client";

import { motion } from "motion/react";
import Image from "next/image";
import quoteIcon from "@/public/home/quote.svg";

interface componentProps {
  name: string;
  quote: string;
}

const Card = ({ name, quote }: componentProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <div className="mx-auto my-4 flex w-2/3 flex-col place-items-center justify-evenly rounded-xl bg-white p-3 shadow-xl lg:h-full lg:pb-8 lg:pl-8 lg:pr-8">
        <div className="place-items-center p-1">
          <Image src={quoteIcon} className="w-1/2 lg:w-3/4" alt="quoteIcon" />
        </div>
        <div className="p-5 text-left text-sm lg:text-base">{quote}</div>
        <div className="p-1 text-sm font-bold lg:text-base">{name}</div>
      </div>
    </motion.div>
  );
};
export default Card;
