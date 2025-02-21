import { motion } from "motion/react";
import React from "react";

const About = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-[95%] lg:w-[80%] h-fit lg:h-full pb-[25%] lg:pb-0 pt-[20%] lg:pt-0"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col justify-start lg:justify-evenly items-center h-full w-full">
        <div className="elementScroll rounded-2xl w-full lg:h-[70%] space-y-5 lg:space-y-10 lg:overflow-y-scroll lg:snap-y lg:snap-mandatory">
          <div className=" flex flex-col justify-start lg:justify-center text-3xl lg:text-5xl font-extrabold lg:h-[550px] lg:snap-center text-left lg:mr-5 lg:bg-[#F8C419] lg:border-4 lg:border-black rounded-2xl p-5">
            <div>
              <div className="text-center lg:text-left">
                The Foundation of{" "}
                <span className="italic font-black">Awkwardness</span>
              </div>
            </div>
            <div className="text-lg lg:text-2xl mt-4 font-normal w-full text-justify lg:text-left">
              Awkward Studio is a digital solutions agency that provides, Tech,
              Marketing and Content Creation Services. The team specialises in
              helping brands connect with their audience through original,
              authentic content that sparks conversations, emotions and
              eventually drives action. With a team of creative, young and
              playful individuals, Awkward Studio prides itself on telling brand
              stories with a fun and innovative twist. Every project the team
              takes on, is powered by a single-minded core thought and personal
              motto – stand out by leaning in to what makes you different.
              Leveraging the power of moment marketing, Awkward Studio turns
              every hiccup into a win and every quirk into a badge of honour.
            </div>
          </div>
          <div className=" flex flex-col justify-start lg:justify-center text-3xl lg:text-5xl font-extrabold lg:h-[550px] lg:snap-center text-left lg:mr-5 lg:bg-[#F8C419] lg:border-4 lg:border-black rounded-2xl p-5">
            <div>
              <div className="text-center lg:text-left">Core Values</div>
            </div>
            <div className="text-lg lg:text-2xl mt-4 font-normal w-full text-justify lg:text-left">
              While the company name might suggest a bit of Awkwardness, the
              team embraces the perceived discomfort the name carries, because
              it shows that one is out of their comfort zone, and that’s where
              growth and learning take place. Too many brands are too busy
              trying to be relevant, Awkward Studio, aspires to help brands not
              just be seen but be remembered.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
