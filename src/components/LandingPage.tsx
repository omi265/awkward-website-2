"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import logo_with_text from "../../public/Logo with text.svg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full min-h-[20vh] relative text-center overflow-hidden w-[90%] lg:w-[80%]">
      <div className="text-3xl lg:text-5xl mb-5 lg:mb-8 font-bold">We Are</div>
      <div className="mb-2">
        <div className="hidden lg:flex">
          <Image src={logo_with_text} width={350} height={400} alt="Logo" />
        </div>
        <div className="flex lg:hidden">
          <Image src={logo_with_text} width={200} height={400} alt="Logo" />
        </div>
      </div>
      <div className="text-xl lg:text-2xl font-semibold mb-8 lg:mb-16 text-slate-500">
        <div className="font-medium mb-8 text-black text-2xl lg:text-4xl">
          <span className="italic font-bold">Awkwardly</span> unique and{" "}
          <span className="italic font-bold">Brilliantly</span> effective.
        </div>
        Crafting Digital Solutions that don’t just work, they{" "}
        <span className="font-black">Stand Out</span>.
      </div>

      <Link className=" text-3xl lg:text-6xl" href={"/home"}>
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
