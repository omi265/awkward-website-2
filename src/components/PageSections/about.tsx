import { motion } from "motion/react";
import React from "react";

const About = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-[80%] lg:w-[80%] h-fit lg:h-screen"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col justify-start lg:justify-evenly items-center h-full w-full mt-[10%] lg:mt-0 mb-[35%] lg:mb-0 ">
        <div className="elementScroll rounded-2xl w-full lg:h-fit space-y-5 ">
          <div className=" flex flex-col justify-start lg:justify-center text-3xl lg:text-5xl font-extrabold lg:h-[550px] lg:snap-center text-left">
            <div>
              <div className="text-center lg:text-left">
                The Foundation of{" "}
                <span className="italic font-black">Awkwardness</span>
              </div>
            </div>
            <div className="text-lg lg:text-2xl mt-4 font-normal w-full text-justify lg:text-left">
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
