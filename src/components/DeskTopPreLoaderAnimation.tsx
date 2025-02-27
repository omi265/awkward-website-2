"use client";

import { motion, useAnimation } from "motion/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import fullscreen_sad from "../../public/fullscreen_sad.png";
import fullscreen_happy from "../../public/fullscreen_happy.png";

type Props = {};

const DeskTopPreLoaderAnimation = (props: Props) => {
  const [isMaximized, setIsMaximized] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  const handleFullScreen = () => {
    setIsFullScreen(true);
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any).webkitRequestFullscreen) {
      // Safari
      (element as any).webkitRequestFullscreen();
    }
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      // Safari
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      // IE11
      (document as any).msExitFullscreen();
    }
  };

  useEffect(() => {
    const onFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", onFullScreenChange);
    document.addEventListener("webkitfullscreenchange", onFullScreenChange);
    document.addEventListener("mozfullscreenchange", onFullScreenChange);
    document.addEventListener("MSFullscreenChange", onFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        onFullScreenChange
      );
      document.removeEventListener("mozfullscreenchange", onFullScreenChange);
      document.removeEventListener("MSFullscreenChange", onFullScreenChange);
    };
  }, []);

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
    mouthRotate: { rotate: -80, x: "50%", y: "-65%", scale: 1.1 },
  };

  const preloaderAnimationsExit = {
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      initial={{ height: "100%" }}
      animate={{ height: "9%" }}
      transition={{
        type: "spring",
        visualDuration: 2,
        stiffness: 50,
        delay: 3,
      }}
      className="hidden sticky top-0 bg-[#F8C419] rounded-t-xl border-b-[10px] border-black z-30 lg:flex w-full justify-center items-center"
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

      {!isMaximized && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="flex items-center space-x-6 w-full h-full pl-5"
        >
          <div className="h-[5dvh] max-h-12 min-h-8 aspect-square border-[11px] rounded-full border-black"></div>
          <div className="h-[5dvh] max-h-12 min-h-8 aspect-square border-[11px] rounded-full border-black"></div>
          {/* <div
            className="h-10 w-10 border-[12px] rounded-full border-black"
            onClick={isFullScreen ? handleExitFullScreen : handleFullScreen}
          ></div> */}
          <HoverCard>
            <HoverCardTrigger
              className="h-[5dvh] max-h-12 min-h-8 aspect-square border-[11px] rounded-full border-black"
              onClick={isFullScreen ? handleExitFullScreen : handleFullScreen}
            ></HoverCardTrigger>
            <HoverCardContent className="flex bg-[#F5C802] text-black font-bold border-4 border-black rounded-2xl text-center cursor-pointer h-8 w-fit">
              <div className="flex justify-center items-center">
                <div className="relative -mt-4">
                  <Image
                    src={isFullScreen ? fullscreen_sad : fullscreen_happy}
                    width={100}
                    height={100}
                    alt="fullscreen"
                  />
                </div>
                <div>
                  {" "}
                  {isFullScreen ? "No! Okay." : "Fullscreen Mode, Baby!"}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DeskTopPreLoaderAnimation;
