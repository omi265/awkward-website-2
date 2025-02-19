"use client";

import { motion, useAnimation } from "motion/react";
import React, { useEffect, useState } from "react";

type Props = {};

const MobilePreLoaderAnimation = (props: Props) => {
  const [isMaximized, setIsMaximized] = useState(true);

  const controls = useAnimation();

  useEffect(() => {
    async function runEyeSequence() {
      await controls.start("eyesEnter");
      await controls.start("eyesOpenFirst");
      await controls.start("eyesClose");
      await controls.start("mouthEnter");
      await controls.start("eyesOpenLast");
      controls.start("mouthRotate");
      controls.start("eyeSectionRotate");

      setTimeout(async () => {
        await controls.start("exit");
        setIsMaximized(false);
      }, 1000);
    }
    runEyeSequence();
  }, [controls]);

  const eyesPreLoaderAnimations = {
    initial: { opacity: 0, scale: 0 },
    eyesEnter: { opacity: 1, scale: 1 },
    eyesOpenFirst: { height: "40px", transition: { delay: 0.1 } },
    eyesClose: { height: "0px", transition: { delay: 0.2 } },
    eyesOpenLast: { height: "40px", transition: { delay: 0.1 } },
  };

  const eyesSectionPreLoaderAnimations = {
    eyeSectionRotate: { rotate: -90, x: "-5%", y: "80%" },
  };

  const mouthPreLoaderAnimations = {
    initial: { opacity: 0, scale: 0 },
    mouthEnter: { opacity: 1, scale: 1 },
    mouthRotate: { rotate: -80, x: "45%", y: "-60%" },
  };

  const preloaderAnimationsExit = {
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      initial={{ height: "105%" }}
      animate={{ height: "4%" }}
      transition={{
        type: "spring",
        visualDuration: 2,
        stiffness: 50,
        delay: 3,
      }}
      className="flex sticky bottom-2 bg-[#F8C419] rounded-b-xl border-t-[10px] border-black z-30 lg:hidden w-full justify-center items-center"
    >
      {isMaximized && (
        <motion.div
          variants={preloaderAnimationsExit}
          initial="initial"
          animate={controls}
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <motion.div
            variants={eyesSectionPreLoaderAnimations}
            initial={false}
            animate={controls}
            className="flex items-center space-x-2 justify-center"
          >
            <motion.div
              variants={eyesPreLoaderAnimations}
              initial="initial"
              animate={controls}
              className="h-0 w-[40px] border-[7px] rounded-full border-black"
            ></motion.div>
            <motion.div
              variants={eyesPreLoaderAnimations}
              initial="initial"
              animate={controls}
              className="h-0 w-[40px] border-[7px] rounded-full border-black"
            ></motion.div>
          </motion.div>
          <motion.div
            variants={mouthPreLoaderAnimations}
            initial="initial"
            animate={controls}
            className="flex flex-col items-center justify-center mt-5 space-y-2"
          >
            <motion.div className="h-0 w-20 border-[4px] rounded-xl border-black"></motion.div>
            <motion.div className="h-0 w-20 border-[4px] rounded-xl border-black"></motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MobilePreLoaderAnimation;
