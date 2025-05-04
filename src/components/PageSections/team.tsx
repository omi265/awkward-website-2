import React from "react";
import ScrollTriggered from "../TEST";
import { motion } from "motion/react";
import Image from "next/image";

const Team = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center w-[90%] lg:w-[80%] h-screen"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Grey Box */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[20%] right-[-8%]"
        >
          <Image
            src={"/landing_vectors/Dark_Grey_Box_Straight.svg"}
            width={33}
            height={53}
            alt="Logo"
            className="lg:w-[53px]"
          />
        </motion.div>

        {/* Outline Box */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[19%] right-[-8.6%]"
        >
          <Image
            src={"/awkward_vectors/Light_Grey_Hollow_Box_Straight.svg"}
            width={33}
            height={53}
            alt="Logo"
            className="lg:w-[73px]"
          />
        </motion.div>

        {/* Light Grey Straights */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[50%] left-[-8%]"
        >
          <Image
            src={"/awkward_vectors/Grey_Straights.svg"}
            width={160}
            height={53}
            alt="Logo"
            className="lg:w-[40px]"
          />
        </motion.div>

        {/* Yellow Box 1*/}
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[20%] right-[-2%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Box_Straight.svg"}
            width={33}
            height={53}
            alt="Logo"
            className="lg:w-[25px]"
          />
        </motion.div>

        {/* Yellow Box 2*/}
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[28%] right-[-7%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Box_Straight.svg"}
            width={33}
            height={53}
            alt="Logo"
            className="lg:w-[25px]"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col justify-between lg:justify-center items-center h-full w-full lg:space-y-16 lg:mt-[10%]">
        <div className="flex flex-col justify-center text-3xl lg:text-5xl font-extrabold w-full text-left mt-6 lg:mt-0">
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
        <div className="elementScroll w-full h-[55svh] lg:h-[50svh] overflow-y-scroll snap-y snap-mandatory pr-1 lg:pr-5 mb-24 lg:mb-0">
          <ScrollTriggered />
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
