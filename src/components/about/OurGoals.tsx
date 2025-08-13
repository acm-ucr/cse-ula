"use client";

import OurGoalsCard from "@/components/about/OurGoalsCard";
import Header from "@/components/Header";
import { ourGoalsCard } from "@/data/OurGoalsCards";
import { motion } from "motion/react";

const OurGoals = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Header text="Our Goals" />
      </motion.div>

      {/* <div className="flex w-full flex-wrap justify-evenly md:pt-6 lg:flex-nowrap">
        {ourGoalsCard.map(({ image, text }, index) => (
          <motion.div
            className="flex w-[45%] justify-center"
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <OurGoalsCard image={image} text={text} />
          </motion.div>
        ))}
      </div> */}

      <div className="flex w-full flex-wrap justify-evenly md:flex-nowrap md:pt-6">
        {ourGoalsCard.map(({ image, text }, index) => (
          <motion.div
            className="flex justify-center"
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <OurGoalsCard image={image} text={text} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurGoals;
