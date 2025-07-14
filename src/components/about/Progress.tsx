"use client";
import CountUp from "react-countup";
const Progress = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-ula-blue-primary">
      <div className="flex justify-center p-4 text-center md:p-8">
        <div className="w-full text-center font-bold text-white sm:text-4xl">
          The UCR CS ULA program started in Fall 2021. Since then we have…
        </div>
      </div>
      <div className="mb-12 flex w-1/2 flex-col items-center justify-center sm:flex-row">
        <div className="flex w-1/2 flex-col items-center justify-center">
          <div className="text-center text-5xl font-extrabold text-ula-yellow-primary md:text-7xl">
            <CountUp start={0} duration={2} end={1500} separator="" />+
          </div>
          <div className="text-nowrap p-2 text-center text-white md:text-xl">
            students helped
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center">
          <div className="text-center text-5xl font-extrabold text-ula-yellow-primary md:text-7xl">
            <CountUp start={0} end={30} duration={2} separator="" />+
          </div>
          <div className="text-nowrap p-2 text-center text-white md:text-xl">
            tutors trained
          </div>
        </div>
      </div>
    </div>
  );
};
export default Progress;
