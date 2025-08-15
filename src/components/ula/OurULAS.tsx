"use client";

import Card from "@/components/ula/Card";
import ULAs from "@/data/CurrentULAs";
import { motion } from "motion/react";

const ULAMapping = () => {
  return (
    <div className="">
      <div className="mx-4 bg-ula-blue-highlight py-10 xl:mx-16">
        <motion.div
          className="flex flex-col place-items-center xl:flex-row xl:flex-wrap xl:items-center xl:justify-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          {ULAs.map((ULA, index) => (
            <Card
              key={index}
              name={ULA.name}
              classes={ULA.classes}
              image={ULA.image}
              description={ULA.desc}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default ULAMapping;

//mx-4 xl:mx-16 flex flex-col place-items-center xl:flex-row xl:flex-wrap xl:items-center xl:justify-center bg-ula-blue-highlight py-10
