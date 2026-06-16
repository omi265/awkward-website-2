"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedLogo from "./AnimatedLogo";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/ThemeContext";

export default function LandingPage() {
  const { isPreloaderFinished } = useTheme();
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // State to track which vector elements are visible
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const totalElements = 12;
  const sequenceDelay = 120;

  // Parallax mouse variables
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 200 };
  const mouseX = useSpring(rawX, springConfig);
  const mouseY = useSpring(rawY, springConfig);

  const transSlowX = useTransform(mouseX, (x) => x * 12);
  const transSlowY = useTransform(mouseY, (y) => y * 12);
  const transFastX = useTransform(mouseX, (x) => x * -20);
  const transFastY = useTransform(mouseY, (y) => y * -20);
  const transMedX = useTransform(mouseX, (x) => x * 15);
  const transMedY = useTransform(mouseY, (y) => y * -15);

  const logoRotateX = useTransform(mouseY, (y) => y * -18);
  const logoRotateY = useTransform(mouseX, (x) => x * 18);
  const logoSpringX = useSpring(logoRotateX, { damping: 40, stiffness: 180 });
  const logoSpringY = useSpring(logoRotateY, { damping: 40, stiffness: 180 });

  // Transition circle-wipe state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });

  // Magnetic button state
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  // Canvas tech grid mesh setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: -1000, y: -1000 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Grid properties
    const gridSize = 60;
    
    // Draw loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw thin tech grid lines
      ctx.strokeStyle = "rgba(0, 0, 0, 0.035)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw interactive node highlights near mouse
      if (mouse.x > 0 && mouse.y > 0) {
        const snapX = Math.round(mouse.x / gridSize) * gridSize;
        const snapY = Math.round(mouse.y / gridSize) * gridSize;

        ctx.fillStyle = "rgba(248, 196, 25, 0.25)";
        ctx.beginPath();
        ctx.arc(snapX, snapY, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(248, 196, 25, 0.5)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(snapX, snapY, 16, 0, Math.PI * 2);
        ctx.stroke();

        // Draw connections to nearby grid intersection points
        const range = 2;
        for (let dx = -range; dx <= range; dx++) {
          for (let dy = -range; dy <= range; dy++) {
            const nodeX = snapX + dx * gridSize;
            const nodeY = snapY + dy * gridSize;

            if (nodeX >= 0 && nodeX <= width && nodeY >= 0 && nodeY <= height) {
              const dist = Math.hypot(nodeX - mouse.x, nodeY - mouse.y);
              if (dist < 180) {
                // Nodes opacity based on distance
                ctx.strokeStyle = `rgba(248, 196, 25, ${0.15 * (1 - dist / 180)})`;
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(nodeX, nodeY);
                ctx.stroke();

                // Draw tiny terminal symbols on intersections (highly tech representative)
                if (dx !== 0 || dy !== 0) {
                  ctx.fillStyle = `rgba(0, 0, 0, ${0.4 * (1 - dist / 180)})`;
                  ctx.font = "9px monospace";
                  ctx.fillText(
                    Math.random() > 0.5 ? "1" : "0",
                    nodeX - 3,
                    nodeY + 3
                  );
                }
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (!isPreloaderFinished) return;

    const timeouts: NodeJS.Timeout[] = [];
    const initialDelay = 100;

    for (let i = 0; i < totalElements; i++) {
      const timeout = setTimeout(() => {
        setVisibleElements((prev) => [...prev, i]);
      }, initialDelay + i * sequenceDelay);
      timeouts.push(timeout);
    }
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [isPreloaderFinished]);

  // Global window mouse movement event listener for high precision 3D parallax
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      rawX.set((clientX - innerWidth / 2) / (innerWidth / 2));
      rawY.set((clientY - innerHeight / 2) / (innerHeight / 2));
    };

    const handleGlobalMouseLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseleave", handleGlobalMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseleave", handleGlobalMouseLeave);
    };
  }, [rawX, rawY]);

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setBtnOffset({ x: x * 0.45, y: y * 0.45 });
  };

  const handleBtnMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  // Trigger expanding circle-mask transition to /home
  const startTransition = (e: React.MouseEvent) => {
    e.preventDefault();
    setClickCoords({ x: e.clientX, y: e.clientY });
    setIsTransitioning(true);

    setTimeout(() => {
      router.push("/home");
    }, 850); // Match transition duration
  };

  const isVisible = (index: number) => visibleElements.includes(index);
  const contentWidth = "max-w-[95%] lg:max-w-5xl";

  return (
    <div
      className="flex justify-center items-center flex-col h-full min-h-[20vh] relative text-center overflow-hidden w-full lg:w-[95%]"
    >
      {/* Interactive Tech Grid Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Floating vector shapes with mouse parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Dot Pattern - Far Top Left */}
        {isVisible(0) && (
          <motion.div
            className="absolute hidden lg:flex top-[16%] left-[2%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: transSlowX, y: transSlowY }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 0.95, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Image src={"/landing_vectors/Grey_Ellipses.svg"} width={94} height={94} style={{ height: "auto" }} alt="Vector" />
            </motion.div>
          </motion.div>
        )}

        {/* Yellow Circle - Top */}
        {isVisible(1) && (
          <motion.div
            className="absolute hidden lg:flex top-[10%] left-[33%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: transFastX, y: transFastY }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Image src={"/landing_vectors/Yellow_Circle.svg"} width={40} height={40} style={{ height: "auto" }} alt="Vector" />
            </motion.div>
          </motion.div>
        )}

        {/* Square Outline - Far Left */}
        {isVisible(2) && (
          <motion.div
            className="absolute hidden lg:flex top-[32%] left-[22%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: transMedX, y: transMedY }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 45, 0, -45, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            >
              <Image src={"/landing_vectors/Light_Grey_Hollow_Box.svg"} width={53} height={53} style={{ height: "auto" }} alt="Vector" />
            </motion.div>
          </motion.div>
        )}

        {/* Filled Square - Left Edge */}
        {isVisible(3) && (
          <motion.div
            className="absolute hidden lg:flex top-[30%] left-[21%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: transSlowX, y: transSlowY }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 45, 0, -45, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            >
              <Image src={"/landing_vectors/Dark_Grey_Box_Straight.svg"} width={53} height={53} style={{ height: "auto" }} alt="Vector" />
            </motion.div>
          </motion.div>
        )}

        {/* Yellow Zigzag - Far Right */}
        {isVisible(6) && (
          <motion.div
            className="absolute top-[8%] right-[12%] lg:top-[40%] lg:right-[10%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: transFastX, y: transFastY }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7], x: [-20, 0, -20] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Image src={"/landing_vectors/Yellow_Zigzags.svg"} width={160} height={53} style={{ height: "auto" }} alt="Vector" className="lg:w-[237px]" />
            </motion.div>
          </motion.div>
        )}

        {/* Concentric Circles - Far Right */}
        {isVisible(8) && (
          <motion.div
            className="absolute right-[-12%] bottom-[25%] lg:bottom-[30%] lg:right-[2%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: transMedX, y: transMedY }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Image src={"/landing_vectors/Light_Grey_Concentrics.svg"} width={75} height={53} style={{ height: "auto" }} alt="Vector" className="lg:w-[90px]" />
            </motion.div>
          </motion.div>
        )}

        {/* Square Filled - Far Right */}
        {isVisible(10) && (
          <motion.div
            className="absolute bottom-[20%] right-[10%] lg:top-[11%] lg:right-[2%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: transSlowX, y: transSlowY }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 45, 0, -45, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            >
              <Image src={"/landing_vectors/Yellow_Box.svg"} width={33} height={53} style={{ height: "auto" }} alt="Vector" className="lg:w-[53px]" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Content */}
      <div className={`${contentWidth} flex flex-col items-center justify-center z-10 h-full select-none`}>
        {/* Reimagined Logo with 3D entry and mouse tilt interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={isPreloaderFinished ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.15 }}
          style={{ perspective: 1200 }}
          className="mb-8 select-none w-full flex justify-center items-center"
        >
          <motion.div
            style={{ 
              rotateX: logoSpringX, 
              rotateY: logoSpringY, 
              transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative cursor-pointer group flex justify-center items-center"
          >
            {/* 3D Floating Shadow Layer */}
            <div 
              className="absolute hidden lg:block opacity-10 blur-[8px] transition-transform duration-500 pointer-events-none"
              style={{
                transform: "translateZ(-50px) translateY(12px) scale(0.95)",
              }}
            >
              <AnimatedLogo width={440} height={297} className="filter brightness-0" startAnimation={isPreloaderFinished} />
            </div>

            {/* Main Logo Image Layer */}
            <div className="relative" style={{ transform: "translateZ(30px)" }}>
              <div className="hidden lg:flex">
                <AnimatedLogo width={440} height={297} startAnimation={isPreloaderFinished} />
              </div>
              <div className="flex lg:hidden">
                <AnimatedLogo width={260} height={176} startAnimation={isPreloaderFinished} />
              </div>
            </div>

            {/* Tech Blueprint Highlight frame on Hover */}
            <div className="absolute -inset-6 border border-black/0 group-hover:border-black/10 rounded-3xl transition-colors duration-500 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Staggered Tagline Text Lines */}
        <div className="text-xl lg:text-3xl font-medium mb-8 lg:mb-12 text-slate-700 w-full leading-relaxed flex flex-col items-center">
          {/* Typography text-mask styling */}
          <div className="font-serif-display mb-6 text-black text-3xl lg:text-5xl font-black leading-tight flex flex-col items-center w-full">
            <div className="overflow-hidden py-1 w-full flex justify-center">
              <motion.div
                initial={{ y: "100%" }}
                animate={isPreloaderFinished ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              >
                <span className="italic font-bold transition-all duration-300 hover:text-[#F8C419]">Awkwardly</span> unique and
              </motion.div>
            </div>
            <div className="overflow-hidden py-1 w-full flex justify-center">
              <motion.div
                initial={{ y: "100%" }}
                animate={isPreloaderFinished ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              >
                <span className="italic font-bold transition-all duration-300 hover:text-[#F8C419]">Brilliantly</span> effective.
              </motion.div>
            </div>
          </div>

          <div className="overflow-hidden py-0.5 w-full flex justify-center">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={isPreloaderFinished ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            >
              Digitizing Operations &amp; Scaling Custom B2B Software.
            </motion.div>
          </div>
          <div className="overflow-hidden py-0.5 mt-2 w-full flex justify-center">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={isPreloaderFinished ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            >
              We build tools that don't just work, they{" "}
              <span className="font-black text-black border-b-[3px] lg:border-b-[4px] border-[#F8C419] hover:bg-[#F8C419]/25 transition-colors duration-200">Stand Out</span>.
            </motion.div>
          </div>
        </div>

        {/* Magnetic CTA Button with Circle-Wipe Transition trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isPreloaderFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
          className="hidden lg:flex"
          onMouseMove={handleBtnMouseMove}
          onMouseLeave={handleBtnMouseLeave}
          style={{ x: btnOffset.x, y: btnOffset.y }}
        >
          <a href="/home" onClick={startTransition}>
            <motion.div
              className="flex justify-center items-center h-[72px] w-[72px] border-[4px] rounded-full border-black bg-[#F8C419] shadow-[6px_6px_0px_#000000] cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={40} strokeWidth={4} />
            </motion.div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isPreloaderFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
          className="flex lg:hidden mt-4"
        >
          <a href="/home" onClick={startTransition}>
            <motion.div
              className="flex justify-center items-center h-[60px] w-[60px] border-[4px] rounded-full border-black bg-[#F8C419] shadow-[4px_4px_0px_#000000]"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={30} strokeWidth={4} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Expanding circle-mask overlay */}
      {isTransitioning && (
        <motion.div
          initial={{ clipPath: `circle(0px at ${clickCoords.x}px ${clickCoords.y}px)` }}
          animate={{ clipPath: `circle(150% at ${clickCoords.x}px ${clickCoords.y}px)` }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#F8C419] z-[999999] pointer-events-auto"
        />
      )}
    </div>
  );
}
