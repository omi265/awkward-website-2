"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring options for smooth cursor lag (Outer ring)
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Spring options for inner dot (Top level - fixed Hook order violation)
  const dotSpringX = useSpring(mouseX, { damping: 50, stiffness: 600 });
  const dotSpringY = useSpring(mouseY, { damping: 50, stiffness: 600 });

  useEffect(() => {
    // Hide custom cursor on touch screens
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // Center the 32px ring
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest("a, button, [role='button'], input, textarea, .cursor-magnetic");
      if (hoverable) {
        setIsHovered(true);
        const text = hoverable.getAttribute("data-cursor-text");
        if (text) {
          setCursorText(text);
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest("a, button, [role='button'], input, textarea, .cursor-magnetic");
      if (hoverable) {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-black pointer-events-none z-[9999] flex items-center justify-center bg-transparent"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovered ? (cursorText ? 80 : 56) : 32,
          height: isHovered ? (cursorText ? 80 : 56) : 32,
          backgroundColor: isHovered ? "rgba(248, 196, 25, 0.9)" : "transparent",
          borderColor: isHovered ? "#000000" : "#F8C419",
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {cursorText && (
          <span className="text-[10px] font-black text-black tracking-wider uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[10000]"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          // Shift coordinates to center the 8px dot inside the 32px circle:
          // X/Y coordinates of mouse minus 16 + 12 = minus 4
          marginLeft: 12,
          marginTop: 12,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
      />
    </>
  );
}
