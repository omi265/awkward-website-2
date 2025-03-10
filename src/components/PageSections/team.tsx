import React from "react";
import ScrollTriggered from "../TEST";
import { motion } from "motion/react";

const Team = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-[90%] lg:w-[80%] mt-[10%] lg:mt-[8%]"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col justify-start lg:justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center text-3xl lg:text-5xl font-extrabold w-full text-left">
          <div>
            <div className="text-center lg:text-left">
              Meet the Awkward Geniuses
            </div>
          </div>
          <div className="text-lg lg:text-2xl mt-4 font-semibold w-full text-justify lg:text-left">
            Great ideas are born from a little chaos, a lot of creativity, and
            just the right amount of awkward. Our team thrives on turning
            unconventional thinking into extraordinary solutions.
          </div>
        </div>
        <div className="elementScroll w-full h-[55svh] lg:h-[50svh] overflow-y-scroll snap-y snap-mandatory pr-1 lg:pr-5 mb-[5%] mt-4 lg:mt-8 lg:mb-0">
          <ScrollTriggered />
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
