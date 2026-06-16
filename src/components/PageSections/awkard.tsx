"use client";
import React, { useState } from "react";
import Image from "next/image";
import rohit_2 from "../../../public/rohit_2.png";
import Circles from "../../../public/Circles.svg";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const Home = ({ setSelectedTab }: any) => {
  // Parallax mouse variables
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 180 };
  const mouseX = useSpring(rawX, springConfig);
  const mouseY = useSpring(rawY, springConfig);

  // Parallax mapping for subtle image jiggle
  const transImgX = useTransform(mouseX, (x) => x * 15);
  const transImgY = useTransform(mouseY, (y) => y * 15);

  // Magnetic button offsets
  const [btn1Offset, setBtn1Offset] = useState({ x: 0, y: 0 });
  const [btn2Offset, setBtn2Offset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    rawX.set((clientX - innerWidth / 2) / (innerWidth / 2));
    rawY.set((clientY - innerHeight / 2) / (innerHeight / 2));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const makeBtnMagnetic = (
    e: React.MouseEvent<HTMLDivElement>,
    setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.4, y: y * 0.4 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center w-[90%] lg:w-[80%] h-full"
    >
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Yellow Concentrics */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ x: useTransform(mouseX, (x) => x * -10), y: useTransform(mouseY, (y) => y * -10) }}
          className="absolute hidden lg:flex top-[6%] left-[-2%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Concentrics.svg"}
            width={164}
            height={94}
            alt="Vector"
          />
        </motion.div>

        {/* Yellow Triangle */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{ x: useTransform(mouseX, (x) => x * 10), y: useTransform(mouseY, (y) => y * 10) }}
          className="absolute hidden lg:flex top-[22%] right-[-5%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Triangle.svg"}
            width={68}
            height={53}
            alt="Vector"
          />
        </motion.div>

        {/* Light Grey Triangle */}
        <motion.div
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute hidden lg:flex top-[57%] left-[50%]"
        >
          <Image
            src={"/awkward_vectors/Light_Grey_Triangle.svg"}
            width={53}
            height={53}
            alt="Vector"
          />
        </motion.div>

        {/* Light Grey Hollow Box */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          className="absolute hidden lg:flex top-[72%] right-[-5%]"
        >
          <Image
            src={"/awkward_vectors/Light_Grey_Hollow_Box.svg"}
            width={68}
            height={53}
            alt="Vector"
          />
        </motion.div>

        {/* Yellow Diagonals */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute hidden lg:flex top-[77%] left-[5%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Diagonals.svg"}
            width={160}
            height={53}
            alt="Vector"
            className="lg:w-[400px]"
          />
        </motion.div>
      </motion.div>

      {/* Desktop Layout */}
      <motion.div
        className="lg:flex justify-between items-center hidden h-screen w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <div className="text-3xl lg:text-5xl font-black w-[60%] flex flex-col justify-center">
          <h1 className="leading-tight text-black tracking-tight text-left">
            The Process of creation <br />
            is <span className="font-serif-display italic font-black text-black border-b-[6px] border-[#F8C419]">Awkward</span>
          </h1>
          <div className="text-base lg:text-xl mt-4 font-normal text-slate-600 leading-relaxed max-w-xl text-left">
            True innovation happens outside the comfort zone. Ready to embrace
            the awkward and craft the next chapter of your brand’s story? Let’s
            make something unforgettable.
          </div>
          <div className="flex justify-start space-x-8 items-center w-full mt-10">
            <motion.div
              className="text-xl font-black px-6 py-3 border-[4px] rounded-full border-black bg-[#F8C419] shadow-[4px_4px_0px_#000] cursor-pointer"
              onMouseMove={(e) => makeBtnMagnetic(e, setBtn1Offset)}
              onMouseLeave={() => setBtn1Offset({ x: 0, y: 0 })}
              style={{ x: btn1Offset.x, y: btn1Offset.y }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab(4)}
            >
              Get Started
            </motion.div>
            <motion.div
              className="text-xl font-bold px-6 py-3 border-[4px] rounded-full border-black bg-white shadow-[4px_4px_0px_#000] cursor-pointer"
              onMouseMove={(e) => makeBtnMagnetic(e, setBtn2Offset)}
              onMouseLeave={() => setBtn2Offset({ x: 0, y: 0 })}
              style={{ x: btn2Offset.x, y: btn2Offset.y }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTab(1)}
            >
              Not Just Yet!
            </motion.div>
          </div>
        </div>

        {/* Restore original placement for right half of the page with mouse movement jiggle */}
        <div className="relative w-[40%] flex justify-center items-center">
          <motion.div 
            style={{ x: transImgX, y: transImgY }}
            className="relative"
          >
            <Image
              src={Circles}
              width={450}
              height={400}
              alt="Logo"
              className="object-cover pointer-events-none"
            />
            <Image
              src={rohit_2}
              width={450}
              height={400}
              alt="Logo"
              className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden justify-start items-start w-full flex-col min-h-screen h-fit my-24 px-4">
        <h1 className="text-3xl font-black text-left leading-tight text-black tracking-tight">
          The Process of creation <br />
          is <span className="font-serif-display italic font-black text-black border-b-[4px] border-[#F8C419]">Awkward</span>
        </h1>

        <div className="relative mt-12 self-center">
          <Image
            src={Circles}
            width={280}
            height={400}
            alt="Circles"
            className="object-cover"
          />
          <Image
            src={rohit_2}
            width={280}
            height={400}
            alt="Rohit"
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="text-base mt-4 font-normal text-slate-600 text-left leading-relaxed">
          Innovation begins outside the comfort zone. Ready to write the next
          chapter in your brand story, awkwardly?
        </div>

        <div className="flex flex-col justify-start space-y-4 items-start w-full mt-10">
          <motion.div
            className="text-lg font-black px-8 py-3 border-[4px] rounded-full border-black bg-[#F8C419] shadow-[4px_4px_0px_#000] text-center w-48"
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTab(4)}
          >
            Get Started
          </motion.div>
          <motion.div
            className="text-base font-bold px-8 py-3 border-[4px] rounded-full border-black bg-white shadow-[4px_4px_0px_#000] text-center w-48"
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTab(1)}
          >
            Not Just Yet!
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
