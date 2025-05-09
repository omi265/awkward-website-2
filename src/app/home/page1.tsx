"use client";

import About from "@/components/PageSections/about";
import Home from "@/components/PageSections/awkard";
import Contact from "@/components/PageSections/contact";
import Team from "@/components/PageSections/team";
import Services from "@/components/PageSections/services";
import React, { useEffect, useState } from "react";
import DesktopTabSelector, {
  MobileTabSelector,
} from "@/components/TabSelector";
import { useRouter } from "next/navigation"; // For pages directory
import Portfolio from "@/components/PageSections/portfolio";
const tabs = [
  { tabName: "AWKWARD STUDIO", tabUrl: "/home#awkward" },
  { tabName: "ABOUT US", tabUrl: "/home#about" },
  { tabName: "TEAM", tabUrl: "/home#team" },
  { tabName: "SERVICES", tabUrl: "/home#services" },
  { tabName: "PORTFOLIO", tabUrl: "/home#portfolio" },
  { tabName: "CONTACT US", tabUrl: "/home#contact" },
];

const HomePage = () => {
  const router = useRouter(); // Ensure this is inside the component
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    router.push(tabs[selectedTab].tabUrl);
  }, [selectedTab]);
  return (
    <div className="flex flex-col-reverse lg:flex-col h-full w-full justify-center">
      <div className="hidden lg:flex">
        <DesktopTabSelector
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="flex lg:hidden justify-center items-center">
        <MobileTabSelector
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="flex justify-center w-full">
        {selectedTab === 0 && <Home setSelectedTab={setSelectedTab} />}
        {selectedTab === 1 && <About />}
        {selectedTab === 2 && <Team />}

        {selectedTab === 3 && <Services />}
        {selectedTab === 4 && <Portfolio />}
        {selectedTab === 5 && <Contact />}
      </div>
    </div>
  );
};

export default HomePage;
