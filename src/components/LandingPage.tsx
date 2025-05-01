"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import logo_with_text from "../../public/Logo with text.svg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  // Set the width for the content area
  const contentWidth = "max-w-md lg:max-w-2xl"; // Adjust these values as needed

  return (
    <div className="flex justify-center items-center flex-col h-full min-h-[20vh] relative text-center overflow-hidden w-[95%]">
      {/* Vector Elements - Background Decorations that never overlap content */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dot Pattern - Far Top Left */}
        <motion.div
          className="absolute top-[16%] left-[2%]"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Grey_Ellipses.svg"}
            width={94}
            height={94}
            alt="Logo"
          />
        </motion.div>

        {/* Yellow Circle - Top */}
        <motion.div
          className="absolute top-[10%] left-[33%]"
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Yellow_Circle.svg"}
            width={40}
            height={40}
            alt="Logo"
          />
        </motion.div>

        {/* Square Outline - Far Left */}
        <motion.div
          className="absolute top-[32%] left-[22%]"
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Light_Grey_Hollow_Box.svg"}
            width={53}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Filled Square - Left Edge */}
        <motion.div
          className="absolute top-[30%] left-[21%]"
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Dark_Grey_Box_Straight.svg"}
            width={53}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Circle Outline - Bottom Left */}
        <motion.div
          className="absolute top-[45%] left-[2%]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <div className="h-6 w-6 lg:h-10 lg:w-10 border-2 border-black rounded-full"></div>
        </motion.div>

        {/* Triangle - Bottom Left Corner */}
        <motion.div
          className="absolute bottom-32 left-8"
          animate={{ rotate: [0, 180, 360] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Yellow_Triangle.svg"}
            width={68}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Yellow Zigzag - Far Right */}
        <motion.div
          className="absolute top-[40%] right-[10%]"
          animate={{
            x: [-20, 0, -20],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Yellow_Zigzags.svg"}
            width={237}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Diamond - Bottom Right Corner */}
        <motion.div
          className="absolute bottom-[16%] right-[20%]"
          animate={{ rotate: [0, 180, 360] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
        >
          <Image
            src={"/landing_vectors/Dark_Grey_Box.svg"}
            width={53}
            height={53}
            alt="Logo"
          />{" "}
        </motion.div>

        {/* Concentric Circles - Far Right */}
        <motion.div
          className="absolute bottom-[30%] right-[2%]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Light_Grey_Concentrics.svg"}
            width={90}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Triangle - Top Right Corner */}
        <motion.div
          className="absolute top-[20%] right-[20%]"
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Light_Grey_Triangle.svg"}
            width={68}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Square Filled - Far Right */}
        <motion.div
          className="absolute top-[11%] right-[2%]"
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Yellow_Box.svg"}
            width={53}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Outline Square - Right Edge */}
        <motion.div
          className="absolute top-[12%] right-[3%]"
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/landing_vectors/Black_Box_Hollow.svg"}
            width={53}
            height={53}
            alt="Logo"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      {/* Content container with fixed width to prevent overlap */}
      <div className={`${contentWidth} flex flex-col items-center z-10`}>
        <div className="text-3xl lg:text-5xl mb-5 lg:mb-8 font-bold">
          We Are
        </div>
        <div className="mb-2">
          <div className="hidden lg:flex">
            <Image src={logo_with_text} width={350} height={400} alt="Logo" />
          </div>
          <div className="flex lg:hidden">
            <Image src={logo_with_text} width={200} height={400} alt="Logo" />
          </div>
        </div>
        <div className="text-xl lg:text-2xl font-semibold mb-5 lg:mb-8 text-slate-500">
          <div className="font-medium mb-8 text-black text-2xl lg:text-4xl">
            <span className="italic font-bold">Awkwardly</span> unique and{" "}
            <span className="italic font-bold">Brilliantly</span> effective.
          </div>
          Crafting Digital Solutions that don't just work, they{" "}
          <span className="font-black">Stand Out</span>.
        </div>
        <Link className="text-3xl lg:text-6xl" href={"/home"}>
          <motion.div
            className="flex justify-center items-center h-[55px] w-[55px] lg:h-[70px] lg:w-[70px] border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight
              size={42}
              strokeWidth={4}
              className="hidden lg:flex"
            />
            <ChevronRight
              size={32}
              strokeWidth={4}
              className="flex lg:hidden"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
