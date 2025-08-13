"use client";

import CountUp from "react-countup";

const Progress = () => {
  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center bg-ula-blue-primary py-6">
      <p className="flex w-full justify-center p-8 text-center font-bold text-white sm:text-4xl">
        The UCR CS ULA program started in Fall 2021. Since then we have…
      </p>
      <div className="mb-8 flex w-1/2 flex-col items-center justify-center md:flex-row">
        <div className="flex w-1/2 flex-col items-center justify-center p-2">
          <div className="text-center text-6xl font-extrabold text-ula-yellow-primary">
            <CountUp start={0} duration={2} end={1500} />+
          </div>
          <p className="text-nowrap p-2 text-center text-white">
            students helped
          </p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center p-2">
          <div className="text-center text-6xl font-extrabold text-ula-yellow-primary">
            <CountUp start={0} end={30} duration={2.5} />+
          </div>
          <p className="text-nowrap p-2 text-center text-white">
            tutors trained
          </p>
        </div>
      </div>
    </div>
  );
};
export default Progress;
