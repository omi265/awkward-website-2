import { motion } from "motion/react";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center w-[80%] lg:w-[80%] h-fit lg:h-screen"
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
        {/* Yellow Box */}
        <motion.div
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[21%] right-[-6%]"
        >
          <Image
            src={"/landing_vectors/Yellow_Box.svg"}
            width={33}
            height={53}
            alt="Logo"
            className="lg:w-[53px]"
          />
        </motion.div>

        {/* Outline Box */}
        <motion.div
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[22%] right-[-5%]"
        >
          <Image
            src={"/landing_vectors/Black_Box_Hollow.svg"}
            width={33}
            height={53}
            alt="Logo"
            className="lg:w-[53px]"
          />
        </motion.div>

        {/* Light Grey ZigZags */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            x: [-20, 0, -20],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[77%] left-[5%]"
        >
          <Image
            src={"/awkward_vectors/Grey_Zigzags.svg"}
            width={160}
            height={53}
            alt="Logo"
            className="lg:w-[300px]"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col justify-start lg:justify-evenly items-center h-full w-full mt-[10%] lg:mt-0 mb-[35%] lg:mb-0 ">
        <div className="elementScroll rounded-2xl w-full lg:h-fit space-y-5 ">
          <div className=" flex flex-col justify-start lg:justify-center text-3xl lg:text-5xl font-extrabold lg:h-[550px] lg:snap-center text-left">
            <div>
              <div className="text-center lg:text-left">
                The Foundation of{" "}
                <span className="italic font-black">Awkwardness</span>
              </div>
            </div>
            <div className="text-lg lg:text-2xl/relaxed mt-4 font-normal w-full text-justify lg:text-left">
              Awkward Studio is a digital solutions agency specializing in Tech,
              Marketing, and Content Creation. We help brands connect with their
              audience through original, authentic content that sparks
              conversations, stirs emotions, and ultimately drives action.
              Fueled by a team of creative, young, and playfully innovative
              minds, we pride ourselves on telling brand stories with a fresh
              and unexpected twist. Every project we take on is guided by one
              core belief: stand out by embracing what makes you different.
              Leveraging the power of moment marketing, we turn hiccups into
              wins and quirks into strengths. And while our name might suggest a
              touch of awkwardness, we see it differently—it’s about stepping
              outside the comfort zone, because that’s where real growth
              happens. Too many brands focus on just being relevant. At Awkward
              Studio, we don’t just help brands get noticed—we make them
              unforgettable.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
