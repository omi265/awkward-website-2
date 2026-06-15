"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";

const About = () => {
  const bodyText =
    "Awkward Studio is a digital solutions agency specializing in Tech, Marketing, and Content Creation. We help brands connect with their audience through original, authentic content that sparks conversations, stirs emotions, and ultimately drives action. Fueled by a team of creative, young, and playfully innovative minds, we pride ourselves on telling brand stories with a fresh and unexpected twist. Every project we take on is guided by one core belief: stand out by embracing what makes you different. Leveraging the power of moment marketing, we turn hiccups into wins and quirks into strengths. And while our name might suggest a touch of awkwardness, we see it differently—it’s about stepping outside the comfort zone, because that’s where real growth happens. Too many brands focus on just being relevant. At Awkward Studio, we don’t just help brands get noticed—we make them unforgettable.";

  const words = bodyText.split(" ");

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.012,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0.15, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative flex justify-center items-center w-[90%] lg:w-[80%] h-fit py-8 lg:py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Yellow Box */}
        <motion.div
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute hidden lg:flex top-[21%] right-[-6%]"
        >
          <Image
            src={"/landing_vectors/Yellow_Box.svg"}
            width={33}
            height={53}
            alt="Vector"
            className="lg:w-[53px]"
          />
        </motion.div>

        {/* Outline Box */}
        <motion.div
          animate={{ rotate: [0, -45, 0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute hidden lg:flex top-[22%] right-[-5%]"
        >
          <Image
            src={"/landing_vectors/Black_Box_Hollow.svg"}
            width={33}
            height={53}
            alt="Vector"
            className="lg:w-[53px]"
          />
        </motion.div>

        {/* Light Grey ZigZags */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], x: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute hidden lg:flex top-[77%] left-[5%]"
        >
          <Image
            src={"/awkward_vectors/Grey_Zigzags.svg"}
            width={160}
            height={53}
            alt="Vector"
            className="lg:w-[300px]"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-start lg:justify-center items-start h-full w-full z-10">
        <div className="rounded-2xl w-full lg:h-fit space-y-8">
          <div className="flex flex-col justify-start lg:justify-center lg:h-fit text-left">
            <motion.h2
              className="text-3xl lg:text-5xl font-black text-left text-black tracking-tight leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              The Foundation of{" "}
              <span className="font-serif-display italic font-black text-black border-b-[6px] border-[#F8C419]">
                Awkwardness
              </span>
            </motion.h2>

            {/* Word-by-word scroll-highlight text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-base lg:text-2xl/relaxed mt-8 font-normal text-left flex flex-wrap gap-x-2 gap-y-1 lg:gap-y-2 text-slate-800 leading-relaxed"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
