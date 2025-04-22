"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/lib/utils";

export default function LogoCarousel({ logos }: { logos: string[] }) {
  const controls = useAnimation();
  const duplicatedLogos = [...logos, ...logos, ...logos];
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mounted, setMounted] = useState(false);

  const handleMouseEnter = () => controls.stop();

  const handleMouseLeave = () => {
    if (isDesktop) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        },
      });
    }
  };

  // First mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation control effect - runs when component mounts and when isDesktop changes
  useEffect(() => {
    if (!mounted) return;

    console.log("Effect running, isDesktop:", isDesktop);

    if (isDesktop) {
      console.log("Starting animation");
      // Force a reset before starting animation
      controls.set({ x: "0%" });
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        },
      });
    } else {
      console.log("Stopping animation");
      controls.stop();
    }

    // Clean up function
    return () => {
      controls.stop();
    };
  }, [isDesktop, mounted, controls]);

  if (!mounted) {
    return (
      <div className="w-full h-48 flex items-center justify-center">
        <p>Loading logos...</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden relative">
      {isDesktop ? (
        <motion.div
          className="flex h-48"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          initial={{ x: "0%" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={`logo-${index}`} className="mx-8 flex-shrink-0">
              <div
                className={`relative ${
                  logo === "maruti" || logo === "index_hyundai"
                    ? "w-72 h-28 lg:h-40"
                    : "w-56 h-28 lg:h-40"
                }`}
              >
                <Image
                  src={`/client_logos/${logo}.svg`}
                  alt="Client Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col flex-wrap items-center justify-center space-y-4 py-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className={`relative ${
                logo === "maruti" || logo === "index_hyundai"
                  ? "w-full h-20"
                  : "w-48 h-20"
              }`}
            >
              <Image
                src={`/client_logos/${logo}.svg`}
                alt="Client Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
