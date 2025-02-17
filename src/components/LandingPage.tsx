"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import logo_with_text from "../../public/Logo with text.svg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full relative mt-32 text-center overflow-hidden pb-20">
      <div className="text-[72px] font-[600] mb-16">We Are</div>
      <div className="mb-2">
        <Image src={logo_with_text} width={450} height={400} alt="Logo" />
      </div>
      <div className="text-4xl font-[500] mb-16">
        An innovation-first digital marketing agency.
      </div>

      <motion.div
        className="flex justify-center items-center h-[70px] w-[70px] border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link className="text-6xl" href={"/home"}>
          <ChevronRight size={42} strokeWidth={4} />
        </Link>
      </motion.div>
    </div>
  );
};

export default LandingPage;
