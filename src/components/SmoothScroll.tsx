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

    const content = wrapper.querySelector(".web-window-content-inner") || wrapper;

    const lenis = new Lenis({
      wrapper: wrapper as HTMLElement,
      content: content as HTMLElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
    });

    // Observe preloader size changes (height shrinks from 100% to 9%) to trigger lenis resize
    const preloader = wrapper.querySelector(".sticky.top-0") || wrapper.firstElementChild;
    let resizeObserver: ResizeObserver | null = null;
    if (preloader) {
      resizeObserver = new ResizeObserver(() => {
        lenis.resize();
      });
      resizeObserver.observe(preloader);
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Save global lenis instance for page-specific scrollTo triggers
    (window as any).lenis = lenis;

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return <>{children}</>;
}
