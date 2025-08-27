"use client";

import { motion } from "motion/react";
import { testimonySections } from "@/data/Testimonies";
import Header from "@/components/Header";
import Card from "@/components/home/Card";

const Testimony = () => {
  return (
    <div className="flex w-full flex-col bg-ula-blue-highlight p-8">
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Header text="Words from the ULA Community" />
        <div className="mx-auto w-1/5 justify-end border-b-4 border-ula-yellow-primary p-2" />
      </motion.div>

      <div className="mx-auto flex flex-col justify-center lg:w-3/4">
        {testimonySections.map(({ title, testimonies }) => (
          <section key={title}>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="my-8 pt-8 text-center text-4xl font-semibold"
            >
              {title}
            </motion.p>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {testimonies.map(({ name, quote }, index) => {
                const isOddLast =
                  index === testimonies.length - 1 &&
                  testimonies.length % 2 === 1;

                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.35 }}
                    className={[
                      "justify-self-center",
                      isOddLast ? "lg:col-span-2" : "",
                    ].join(" ")}
                  >
                    <Card name={name} quote={quote} />
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
