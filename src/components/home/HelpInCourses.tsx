"use client";

import Header from "@/components/Header";
import { motion, type Variants } from "framer-motion";

const headerFromLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listFromLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1,
      delay,
    },
  }),
};

const itemFromLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function HelpInCourses() {
  return (
    <div className="mx-auto w-full p-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={headerFromLeft}
      >
        <Header text="Do you need help in your CSE courses?" />
      </motion.div>
      <div className="mt-5 grid grid-cols-1 justify-items-start gap-2 pl-10 font-semibold md:grid-cols-2 md:justify-items-center md:gap-14 md:pl-0 md:text-lg">
        <motion.ul
          className="space-y-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={listFromLeft}
          custom={0}
        >
          <motion.li variants={itemFromLeft}>✓ Python: CS 9A, 9B, 9C</motion.li>
          <motion.li variants={itemFromLeft}>
            ✓ Software: CS 10A, 10B, 10C
          </motion.li>
          <motion.li variants={itemFromLeft}>
            ✓ Discrete Math: CS 011 / MATH 011
          </motion.li>
        </motion.ul>
        <motion.ul
          className="space-y-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={listFromLeft}
          custom={0.3}
        >
          <motion.li variants={itemFromLeft}>
            ✓ Algorithms: CS 111, 141
          </motion.li>
          <motion.li variants={itemFromLeft}>
            ✓ Computer Systems: CS 61
          </motion.li>
          <motion.li variants={itemFromLeft}>
            ✓ Software Construction: CS 100
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
