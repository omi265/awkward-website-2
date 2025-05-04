"use client";
import About from "@/components/PageSections/about";
import Home from "@/components/PageSections/awkard";
import Contact from "@/components/PageSections/contact";
import Team from "@/components/PageSections/team";
import Services from "@/components/PageSections/services";
import Portfolio from "@/components/PageSections/portfolio";
import React, { useEffect, useState, useRef } from "react";
import DesktopTabSelector, {
  MobileTabSelector,
} from "@/components/TabSelector";

const tabs = [
  { tabName: "AWKWARD STUDIO", tabUrl: "/home#awkward", id: "awkward" },
  { tabName: "ABOUT US", tabUrl: "/home#about", id: "about" },
  { tabName: "TEAM", tabUrl: "/home#team", id: "team" },
  { tabName: "SERVICES", tabUrl: "/home#services", id: "services" },
  { tabName: "PORTFOLIO", tabUrl: "/home#portfolio", id: "portfolio" },
  { tabName: "CONTACT US", tabUrl: "/home#contact", id: "contact" },
];

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    Array(tabs.length).fill(null)
  );
  const [isScrolling, setIsScrolling] = useState(false);

  // Update URL without triggering navigation
  useEffect(() => {
    if (!isScrolling) {
      window.history.replaceState(null, "", tabs[selectedTab].tabUrl);
    }
  }, [selectedTab, isScrolling]);

  // Handle initial hash in URL
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const index = tabs.findIndex((tab) => tab.id === hash);
    if (index !== -1) {
      setSelectedTab(index);
      setTimeout(() => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  // Handle tab clicking
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    setIsScrolling(true);

    // Smooth scroll to the section
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Set up intersection observer to update selected tab on scroll
  useEffect(() => {
    const observerOptions = {
      root: null, // use viewport
      rootMargin: "0px",
      threshold: 0.5, // trigger when 50% of element is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling) return;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1 && selectedTab !== index) {
            setSelectedTab(index);
          }
          break;
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [selectedTab, isScrolling]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        // Optional: Add additional scroll handling if needed
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <div className="flex flex-col-reverse lg:flex-col h-full w-full justify-center">
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
      <div className="flex flex-col w-full h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        {" "}
        <div
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="flex justify-center h-screen w-full snap-start lg:snap-center"
        >
          <div className="flex justify-center items-start h-full lg:h-screen w-full overflow-hidden">
            <div className="w-full max-h-screen overflow-y-auto flex justify-center items-center">
              <Home setSelectedTab={handleTabClick} />{" "}
            </div>
          </div>
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          className="flex justify-center h-screen w-full snap-start lg:snap-center"
        >
          <div className="flex justify-center items-start h-full lg:h-screen w-full overflow-hidden">
            <div className="w-full max-h-screen overflow-y-auto flex justify-center items-start">
              <About />
            </div>
          </div>
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          className="flex justify-center h-screen w-full snap-start lg:snap-center"
        >
          <div className="flex justify-center items-start h-full lg:h-screen w-full overflow-hidden">
            <div className="w-full max-h-screen overflow-y-auto flex justify-center items-center">
              <Team />
            </div>
          </div>
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          className="flex justify-center h-screen w-full snap-start lg:snap-center"
        >
          <div className="flex justify-center items-start h-full lg:h-screen w-full overflow-hidden">
            <div className="w-full max-h-screen overflow-y-auto flex justify-center items-start">
              <Services />
            </div>
          </div>
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          className="flex justify-center h-screen w-full snap-start lg:snap-center"
        >
          <div className="flex justify-center items-start h-full lg:h-screen w-full overflow-hidden">
            <div className="w-full max-h-screen overflow-y-auto flex justify-center items-start">
              <Portfolio />
            </div>
          </div>
        </div>
        <div
          ref={(el) => {
            sectionRefs.current[5] = el;
          }}
          className="flex justify-center h-screen w-full snap-start lg:snap-center"
        >
          <div className="flex justify-center items-start h-full lg:h-screen w-full overflow-hidden">
            <div className="w-full max-h-screen overflow-y-auto flex justify-center items-start">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
