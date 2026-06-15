"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";

export default function ScrollTriggered() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-[3px] border-black bg-[#D9D9D9] divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-black w-full select-none overflow-hidden rounded-2xl shadow-[8px_8px_0px_#000000]">
      {Team.map((member: any, i: number) => (
        <Card member={member} index={i} key={i} />
      ))}
    </div>
  );
}

function Card({ member, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tracking inside the cell
  const x = useMotionValue(150);
  const y = useMotionValue(150);

  const springConfig = { damping: 40, stiffness: 280 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Spotlight radial gradient follow trigger
  const spotlightBG = useTransform(
    [mouseX, mouseY],
    ([mx, my]) => `radial-gradient(circle 220px at ${mx}px ${my}px, rgba(248, 196, 25, 0.45) 0%, rgba(255, 255, 255, 0) 80%)`
  );

  // Portrait spring offsets
  const portraitX = useSpring(useTransform(x, [0, 400], [-10, 10]), springConfig);
  const portraitY = useSpring(useTransform(y, [0, 400], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset spring to center
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      x.set(rect.width / 2);
      y.set(rect.height / 2);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col md:flex-row justify-between items-center w-full min-h-[350px] bg-white p-8 overflow-hidden group transition-colors duration-500 cursor-magnetic"
      data-cursor-text="HELLO"
    >
      {/* Spotlight Canvas overlay (follows cursor) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: spotlightBG }}
      />

      {/* Left Details */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full md:w-[55%] text-left space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-black text-slate-400 group-hover:text-black transition-colors">
            0{index + 1}
          </span>
          <span className="h-[2px] w-6 bg-black/10 group-hover:bg-black/30 transition-colors" />
          <span className="text-[10px] font-black text-slate-500 tracking-wider uppercase border border-slate-200 rounded px-2 py-0.5 bg-slate-50 group-hover:bg-black group-hover:text-[#F8C419] group-hover:border-black transition-all">
            TEAM
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl lg:text-3xl font-black text-black tracking-tight leading-none">
            {member.firstName} <span className="font-serif-display italic font-black text-black group-hover:text-[#F8C419] transition-colors">{member.lastName}</span>
          </h3>
          <p className="text-xs lg:text-sm font-bold tracking-wide uppercase text-slate-800 pt-1">
            {member.designation}
          </p>
        </div>

        <div className="h-[1px] bg-black/10 w-full" />

        {/* Info expands on hover */}
        <motion.div
          animate={{
            height: isHovered ? "auto" : "0px",
            opacity: isHovered ? 1 : 0.1,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden space-y-2"
        >
          <span className="font-serif-display italic font-bold text-xs lg:text-sm leading-none text-slate-700 block">
            "{member.tagline}"
          </span>
          <p className="text-[11px] lg:text-xs font-semibold text-slate-800 leading-relaxed">
            {member.description}
          </p>
        </motion.div>
      </div>

      {/* Portrait Box on the Right */}
      <div className="relative z-10 w-full md:w-[40%] aspect-square flex justify-center items-center mt-6 md:mt-0">
        {/* Soft yellow circles background */}
        <div className="absolute inset-0 bg-slate-50 border-2 border-black rounded-full scale-90 group-hover:scale-100 group-hover:bg-[#F8C419]/20 transition-all duration-500 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]" />
        
        {/* Floating spring portrait */}
        <motion.div
          style={{ x: portraitX, y: portraitY }}
          className="relative w-full h-full p-4 flex justify-center items-center"
        >
          <Image
            src={member.memoji}
            width={180}
            height={180}
            alt={member.firstName}
            className="object-contain hover:scale-105 transition-transform duration-300 pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
}

const Team: any[] = [
  {
    memoji: "/rohit_1.png",
    firstName: "Rohit",
    lastName: "Mariwalla",
    designation: "Director",
    tagline: "The Backbone of Awkward",
    description:
      "A tech enthusiast since childhood, Rohit’s journey spans software engineering, business development, and entrepreneurship. With experience at Google, Searce, and Workplace by Facebook, he brings a unique blend of technology and strategy to Awkward Studio. Now, he’s focused on pushing creative and technological boundaries.",
  },
  {
    memoji: "/omkar_1.png",
    firstName: "Omkar",
    lastName: "Mishra",
    designation: "Lead Software Engineer",
    tagline: "Turning Awkward Ideas into Seamless Code",
    description:
      "Specializes in high-performing websites, automation, and AI-powered solutions. He’s helped businesses worldwide create seamless, intelligent digital experiences that work smarter, not harder. Always pushing boundaries to make systems run faster, smoother, and way cooler.",
  },
  {
    memoji: "/jeanna_1.png",
    firstName: "Jeanna",
    lastName: "Udhwani",
    designation: "Design Lead & Marketing Head",
    tagline: "Making Awkward look Effortlessly Brilliant for Brands",
    description:
      "With 8+ years of experience in branding, design, and storytelling, Jeanna crafts compelling narratives that help brands connect and grow. Whether through visuals or words, she ensures every brand’s identity stands out and speaks volumes.",
  },
  {
    memoji: "/atique.png",
    firstName: "Atique",
    lastName: "Khan",
    designation: "Software Engineer",
    tagline: "Turning Awkward Challenges into Elegant Solutions",
    description:
      "From Backend magic to DevOps wizardry, he creates and transforms awkward workflows into streamlined systems that scale. With experience spanning healthcare, big data and automotive industries, he thrives on solving the unsolvable and optimizing the unoptimized.",
  },
];
