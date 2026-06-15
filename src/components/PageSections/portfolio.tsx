"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const ClientLogos = [
  "maruti",
  "index_hyundai",
  "arogya_finance",
  "cinnamon_stick",
  "policy_dost",
  "index_fleet",
  "tata_carcare",
  "t3_cars",
  "rafa_collection",
  "best_dental",
  "ida",
  "ank_logo_orange",
];

const Portfolio = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-[90%] lg:w-[85%] h-fit py-8 lg:py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col w-full text-black">
        {/* Section Header */}
        <div className="flex flex-col justify-center w-full text-left">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight text-left">
            Our <span className="font-serif-display italic font-black text-black border-b-[3px] border-[#F8C419]">Clients</span>
          </h2>
          <div className="text-base lg:text-xl mt-4 font-normal text-slate-600 leading-relaxed text-left max-w-2xl mb-12">
            We partner with forward-thinking businesses to automate manual workflows, replace legacy databases, and build scalable secure software solutions.
          </div>
        </div>

        {/* High-Density Chique Minimal Logo Wall (Borderless Grid) */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 lg:gap-x-24 lg:gap-y-16 w-full pt-2 select-none">
          {ClientLogos.map((logo, idx) => {
            const isPng = logo === "ank_logo_orange";
            const logoPath = isPng ? `/client_logos/${logo}.png` : `/client_logos/${logo}.svg`;

            return (
              <motion.div
                key={idx}
                className="relative w-[150px] h-10 lg:w-[200px] lg:h-14 flex items-center justify-center group"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {/* Clean Logo Image with grayscale-to-color transition and opacity shifts */}
                <Image
                  src={logoPath}
                  alt="Client Logo"
                  fill
                  sizes="(max-width: 1024px) 150px, 200px"
                  className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
