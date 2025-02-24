import React from "react";
import ScrollTriggered from "../TEST";
import { motion } from "motion/react";

const Team = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-[90%] lg:w-[80%] mt-[10%] lg:mt-[5%]"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col justify-start lg:justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center text-3xl lg:text-5xl font-extrabold w-full text-left">
          <div>
            <div className="text-center lg:text-left">The Team</div>
          </div>
          <div className="text-lg lg:text-2xl mt-4 font-semibold w-full text-justify lg:text-left">
            Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
            suspendisse neque. Auctor et dignissim elementum sed aliquam
            porttitor diam. Vitae aliquet fames diam curabitur.
          </div>
        </div>
        <div className="elementScroll w-full h-[55svh] lg:h-[450px] overflow-y-scroll snap-y snap-mandatory pr-1 lg:pr-5 mb-[5%] mt-4 lg:mt-8 lg:mb-0">
          <ScrollTriggered />
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
