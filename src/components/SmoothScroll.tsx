"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Avoid running on mobile devices to prevent touch scroll conflicts
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) return;

    // Target the WebWindow scroll wrapper instead of window
    const wrapper = document.querySelector(".web-window-scroll");
    if (!wrapper) return;

    const lenis = new Lenis({
      wrapper: wrapper as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Save global lenis instance for page-specific scrollTo triggers
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return <>{children}</>;
}
