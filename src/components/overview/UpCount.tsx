"use client";
import React from "react";
import CountUp from "react-countup";
const UpCount = () => {
  return (
    <div className="h-2/5 w-screen bg-ula-blue-primary md:h-1/3">
      <div className="flex h-12 w-full justify-center p-4 text-center md:p-8">
        <div className="w-4/5 text-center font-bold text-white sm:w-screen sm:text-4xl">
          The UCR CS ULA program started in Fall 2021. Since then we have…
        </div>
      </div>
      <div className="mt-11 flex h-1/2 flex-col items-center justify-center gap-3 sm:flex-row md:mt-9 md:gap-40">
        <div className="flex flex-col">
          <div className="text-center text-5xl font-extrabold text-ula-yellow-primary md:text-7xl">
            <CountUp start={0} duration={2} end={1500} separator="" />+
          </div>
          <div className="p-2 text-center text-base text-white md:text-xl">
            students helped
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center text-5xl font-extrabold text-ula-yellow-primary md:text-7xl">
            <CountUp start={0} end={30} duration={2} separator="" />+
          </div>
          <div className="p-2 text-center text-base text-white md:text-xl">
            tutors trained
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpCount;
