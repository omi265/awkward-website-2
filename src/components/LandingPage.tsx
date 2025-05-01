"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo_with_text from "../../public/Logo with text.svg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  // State to track which vector elements are visible
  const [visibleElements, setVisibleElements] = useState<number[]>([]);

  // Total number of vector elements
  const totalElements = 12;

  // The delay between each element appearing (in milliseconds)
  const sequenceDelay = 200;

  useEffect(() => {
    // Clear any existing timeouts when component unmounts or remounts
    const timeouts: NodeJS.Timeout[] = [];

    // Initial delay of 5 seconds before starting the animation sequence
    const initialDelay = 3500;

    // Create a timeout for each element to make them appear sequentially
    for (let i = 0; i < totalElements; i++) {
      const timeout = setTimeout(() => {
        setVisibleElements((prev) => [...prev, i]);
      }, initialDelay + i * sequenceDelay);

      timeouts.push(timeout);
    }

    // Cleanup function to clear all timeouts
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  // Element visibility check helper
  const isVisible = (index: number) => visibleElements.includes(index);

  // Set the width for the content area
  const contentWidth = "max-w-[95%] lg:max-w-2xl"; // Adjust these values as needed

  return (
    <div className="flex justify-center items-center flex-col h-full min-h-[20vh] relative text-center overflow-hidden w-full lg:w-[95%]">
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dot Pattern - Far Top Left */}
        {isVisible(0) && (
          <motion.div
            className="absolute hidden lg:flex  top-[16%] left-[2%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
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
          </motion.div>
        )}

        {/* Yellow Circle - Top */}
        {isVisible(1) && (
          <motion.div
            className="absolute hidden lg:flex top-[10%] left-[33%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
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
          </motion.div>
        )}

        {/* Square Outline - Far Left */}
        {isVisible(2) && (
          <motion.div
            className="absolute hidden lg:flex top-[32%] left-[22%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
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
          </motion.div>
        )}

        {/* Filled Square - Left Edge */}
        {isVisible(3) && (
          <motion.div
            className="absolute hidden lg:flex top-[30%] left-[21%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
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
          </motion.div>
        )}

        {/* Circle Outline - Bottom Left */}
        {isVisible(4) && (
          <motion.div
            className="absolute hidden lg:flex top-[45%] left-[2%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <div className="h-6 w-6 lg:h-10 lg:w-10 border-2 border-black rounded-full"></div>
            </motion.div>
          </motion.div>
        )}

        {/* Triangle - Bottom Left Corner */}
        {isVisible(5) && (
          <motion.div
            className="absolute hidden lg:flex bottom-32 left-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
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
          </motion.div>
        )}

        {/* Yellow Zigzag - Far Right */}
        {isVisible(6) && (
          <motion.div
            className="absolute top-[8%] right-[12%] lg:top-[40%] lg:right-[10%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
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
            >
              <Image
                src={"/landing_vectors/Yellow_Zigzags.svg"}
                width={160}
                height={53}
                alt="Logo"
                className="lg:w-[237px]"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Diamond - Bottom Right Corner */}
        {isVisible(7) && (
          <motion.div
            className="absolute bottom-[90%] right-[82%] lg:bottom-[16%] lg:right-[20%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
            >
              <Image
                src={"/landing_vectors/Dark_Grey_Box.svg"}
                width={32}
                height={53}
                alt="Logo"
                className="lg:w-[53px]"
              />{" "}
            </motion.div>
          </motion.div>
        )}

        {/* Concentric Circles - Far Right */}
        {isVisible(8) && (
          <motion.div
            className="absolute right-[-12%] top-[25%] lg:bottom-[30%] lg:right-[2%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              <Image
                src={"/landing_vectors/Light_Grey_Concentrics.svg"}
                width={75}
                height={53}
                alt="Logo"
                className="lg:w-[90px]"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Triangle - Top Right Corner */}
        {isVisible(9) && (
          <motion.div
            className="absolute top-[85%] right-[80%] lg:top-[20%] lg:right-[20%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            >
              <Image
                src={"/landing_vectors/Light_Grey_Triangle.svg"}
                width={34}
                height={53}
                alt="Logo"
                className="lg:w-[68px]"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Square Filled - Far Right */}
        {isVisible(10) && (
          <motion.div
            className="absolute bottom-[20%] right-[10%] lg:top-[11%] lg:right-[2%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 45, 0, -45, 0] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            >
              <Image
                src={"/landing_vectors/Yellow_Box.svg"}
                width={33}
                height={53}
                alt="Logo"
                className="lg:w-[53px]"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Outline Square - Right Edge */}
        {isVisible(11) && (
          <motion.div
            className="absolute bottom-[18.5%] right-[12.5%] lg:top-[12%] lg:right-[3%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 45, 0, -45, 0] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            >
              <Image
                src={"/landing_vectors/Black_Box_Hollow.svg"}
                width={33}
                height={53}
                alt="Logo"
                className="lg:w-[53px]"
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Content */}
      {/* Content container with fixed width to prevent overlap */}
      <div
        className={`${contentWidth} flex flex-col items-center justify-center z-10 h-full`}
      >
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
        <div className="text-xl lg:text-2xl font-semibold mb-5 lg:mb-8 text-slate-500 w-[90%]">
          <div className="font-medium mb-8 text-black text-2xl lg:text-4xl">
            <span className="italic font-bold">Awkwardly</span> unique and{" "}
            <span className="italic font-bold">Brilliantly</span> effective.
          </div>
          Crafting Digital Solutions that don't just work, they{" "}
          <span className="font-black">Stand Out</span>.
        </div>
        <Link className="hidden lg:flex text-3xl lg:text-6xl" href={"/home"}>
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
      <Link className="lg:hidden text-3xl lg:text-6xl" href={"/home"}>
        <motion.div
          className="flex justify-center items-center h-[55px] w-[55px] lg:h-[70px] lg:w-[70px] border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={42} strokeWidth={4} className="hidden lg:flex" />
          <ChevronRight size={32} strokeWidth={4} className="flex lg:hidden" />
        </motion.div>
      </Link>
    </div>
  );
};

export default LandingPage;
