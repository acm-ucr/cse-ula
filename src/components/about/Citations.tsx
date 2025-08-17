"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Header from "@/components/Header";

const Citations = () => {
  return (
    <div className="pt-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Header text="Citations" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-6 flex justify-center px-4 text-black"
      >
        <div className="mb-6 w-1/2 text-center text-xl font-bold">
          Check out the research about the ULA program!
          <p className="my-8 text-base font-normal tracking-wide">
            <Link
              href="https://dl.acm.org/doi/abs/10.1145/3626253.3635630"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Haji Amin Shirazi, S., Salloum, M., & Watkinson, N. (2024, March)
              A Study of Undergraduate Learning Assistants (ULAs) in Computer
              Science.
              <br />
              In Proceedings of the 55th ACM Technical Symposium on Computer
              Science Education V. 2 (pp. 1664-1665)
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default Citations;
