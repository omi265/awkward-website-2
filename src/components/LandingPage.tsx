"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import logo_with_text from "../../public/Logo with text.svg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-dvh relative text-center overflow-hidden w-[90%] lg:w-full">
      <div className="text-4xl lg:text-6xl mb-8 lg:mb-16 font-bold">We Are</div>
      <div className="mb-2">
        <div className="hidden lg:flex">
          <Image src={logo_with_text} width={450} height={400} alt="Logo" />
        </div>
        <div className="flex lg:hidden">
          <Image src={logo_with_text} width={250} height={400} alt="Logo" />
        </div>
      </div>
      <div className="text-3xl lg:text-5xl font-semibold mb-16">
        An innovation-first digital solutions agency.
      </div>

      <Link className="text-6xl" href={"/home"}>
        <motion.div
          className="flex justify-center items-center h-[70px] w-[70px] border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={42} strokeWidth={4} />
        </motion.div>
      </Link>
    </div>
  );
};

export default LandingPage;
