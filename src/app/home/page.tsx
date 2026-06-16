"use client";
import About from "@/components/PageSections/about";
import Home from "@/components/PageSections/awkard"; // Assuming this is your "AWKWARD STUDIO" section
import Contact from "@/components/PageSections/contact";
import Services from "@/components/PageSections/services";
import Portfolio from "@/components/PageSections/portfolio";
import React, { useEffect, useState, useRef } from "react";
import DesktopTabSelector, {
  MobileTabSelector,
} from "@/components/TabSelector";

const tabs = [
  { tabName: "AWKWARD STUDIO", tabUrl: "/home#awkward", id: "awkward" },
  { tabName: "ABOUT US", tabUrl: "/home#about", id: "about" },
  { tabName: "SERVICES", tabUrl: "/home#services", id: "services" },
  { tabName: "CLIENTS", tabUrl: "/home#portfolio", id: "portfolio" },
  { tabName: "CONTACT US", tabUrl: "/home#contact", id: "contact" },
];

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    Array(tabs.length).fill(null)
  );
  const [isScrolling, setIsScrolling] = useState(false);

  // Effect to handle initial hash in URL and scroll to it
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const initialIndex = tabs.findIndex((tab) => tab.id === hash);

    if (initialIndex !== -1) {
      setSelectedTab(initialIndex);
      requestAnimationFrame(() => {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(sectionRefs.current[initialIndex], {
            immediate: true,
            offset: -120,
          });
        } else {
          sectionRefs.current[initialIndex]?.scrollIntoView({
            behavior: "instant",
          });
        }
      });
    } else {
      setSelectedTab(0);
      requestAnimationFrame(() => {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(sectionRefs.current[0], {
            immediate: true,
            offset: -120,
          });
        } else {
          sectionRefs.current[0]?.scrollIntoView({ behavior: "instant" });
        }
      });
    }
  }, []);

  // Update URL without triggering navigation when selectedTab changes
  useEffect(() => {
    if (!isScrolling) {
      window.history.replaceState(null, "", tabs[selectedTab].tabUrl);
    }
  }, [selectedTab, isScrolling]);

  // Handle tab clicking via Lenis scroll target
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    setIsScrolling(true);

    const targetEl = sectionRefs.current[index];
    const lenis = (window as any).lenis;

    if (lenis && targetEl) {
      lenis.scrollTo(targetEl, {
        offset: -120, // Offset to sit perfectly below the fixed header
        duration: 1.2,
        immediate: false,
      });
    } else {
      targetEl?.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1200);
  };

  // Set up scroll listener scroll-spy relative to the web-window-scroll container
  useEffect(() => {
    const scrollContainer = document.querySelector(".web-window-scroll");
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPos = scrollContainer.scrollTop;
      const threshold = 150; // Offset threshold matching header/tab selector height

      // Check if we are at the bottom of the scroll container
      const isAtBottom =
        scrollPos + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight - 20;

      let activeIndex = 0;

      if (isAtBottom) {
        activeIndex = sectionRefs.current.length - 1;
      } else {
        for (let i = 0; i < sectionRefs.current.length; i++) {
          const ref = sectionRefs.current[i];
          if (ref) {
            const sectionTop = ref.offsetTop;
            if (scrollPos >= sectionTop - threshold) {
              activeIndex = i;
            }
          }
        }
      }

      if (selectedTab !== activeIndex) {
        setSelectedTab(activeIndex);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [selectedTab, isScrolling]);

  return (
    <div className="flex flex-col h-full w-full relative">
      {/* Header Tab Selector */}
      <div className="hidden lg:flex">
        <DesktopTabSelector
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={handleTabClick}
        />
      </div>
      <div className="flex lg:hidden justify-center items-center">
        <MobileTabSelector
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={handleTabClick}
        />
      </div>

      {/* Main Single Scroll Container View (no internal scrolls, scroll flows into WebWindow wrapper) */}
      <div className="flex flex-col w-full pt-16 pb-24 lg:pt-28 lg:pb-16 select-none">
        <div
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="flex justify-center min-h-fit lg:min-h-[90vh] w-full py-12 lg:py-20 items-center"
        >
          <Home setSelectedTab={handleTabClick} />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          className="flex justify-center min-h-fit lg:min-h-[90vh] w-full py-12 lg:py-20 items-center"
        >
          <About />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          className="flex justify-center min-h-fit lg:min-h-[90vh] w-full py-12 lg:py-20 items-center"
        >
          <Services />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          className="flex justify-center min-h-fit lg:min-h-[90vh] w-full py-12 lg:py-20 items-center"
        >
          <Portfolio />
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          className="flex justify-center min-h-fit lg:min-h-[90vh] w-full py-12 lg:py-20 items-center"
        >
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
