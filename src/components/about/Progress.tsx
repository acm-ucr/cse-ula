"use client";
import { motion } from "motion/react";
import CountUp from "react-countup";

const Progress = () => {
  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center bg-ula-blue-primary py-6">
      <motion.p
        className="flex w-full justify-center p-8 text-center font-bold text-white sm:text-4xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        The UCR CS ULA program started in Fall 2021. Since then we have…
      </motion.p>
      <div className="mb-8 flex w-1/2 flex-col items-center justify-center md:flex-row">
        <div className="flex w-1/2 flex-col items-center justify-center p-2">
          <motion.div
            className="text-center text-6xl font-extrabold text-ula-yellow-primary"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <CountUp start={0} duration={2} end={1500} />+
          </motion.div>
          <motion.p
            className="text-nowrap p-2 text-center text-white"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            students helped
          </motion.p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center p-2">
          <motion.div
            className="text-center text-6xl font-extrabold text-ula-yellow-primary"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <CountUp start={0} end={30} duration={2.5} />+
          </motion.div>
          <motion.p
            className="text-nowrap p-2 text-center text-white"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            tutors trained
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default Progress;
