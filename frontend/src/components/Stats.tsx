import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Triggers when 50% of component is visible
  });
  return (
    <div className="max-w-6xl mx-auto flex justify-between text-center pl-14 pr-14" ref={ref}>
      {/* <div className="max-w-7xl mx-auto flex justify-between text-center pl-10 pr-10"> */}
        {/* Stat Item */}
        <div className="w-60 h-60 bg-pink-200 rounded-lg flex flex-col items-center justify-center text-center">
          {/* <span className="text-4xl font-bold text-black">20+</span> */}
          {inView && (
              <CountUp start={0} end={20} duration={2} suffix="+" className="text-4xl font-bold" />
            )}
          <p className="text-lg text-black mt-2 font-semibold">Years of Experience</p>
        </div>

        {/* Stat Item */}
        <div className="w-60 h-60 bg-blue-200 rounded-lg flex flex-col items-center justify-center text-center">
          {/* <span className="text-4xl font-bold text-black">100+</span> */}
          {inView && (
              <CountUp start={0} end={200} duration={2} suffix="+" className="text-4xl font-bold" />
            )}
          <p className="text-lg text-black mt-2 font-semibold">Perfect Scores</p>
        </div>

        {/* Stat Item */}
        <div className="w-60 h-60 bg-green-200 rounded-lg flex flex-col items-center justify-center text-center">
          {/* <span className="text-4xl font-bold text-black">15+</span> */}
          {inView && (
              <CountUp start={0} end={20000} duration={2} suffix="+" className="text-4xl font-bold" />
            )}
          <p className="text-lg text-black mt-2 font-semibold">Happy Students</p>
        </div>

        {/* Stat Item */}
        <div className="w-60 h-60 bg-yellow-200 rounded-lg flex flex-col items-center justify-center text-center">
          {/* <span className="text-4xl font-bold text-black">50+</span> */}
          {inView && (
              <CountUp start={0} end={50} duration={2} suffix="+" className="text-4xl font-bold" />
            )}
          <p className="text-lg text-black mt-2 font-semibold">Study Materials Used</p>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Stats;
