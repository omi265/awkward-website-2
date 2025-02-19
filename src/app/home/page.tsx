"use client";

import About from "@/components/PageSections/about";
import Home from "@/components/PageSections/awkard";
import Contact from "@/components/PageSections/contact";
import Team from "@/components/PageSections/team";
import Services from "@/components/PageSections/services";
import React, { useState } from "react";
import {
  DesktopTabSelector,
  MobileTabSelector,
} from "@/components/TabSelector";

const tabs = [
  { tabName: "AWKWARD STUDIO", tabUrl: "/home" },
  { tabName: "ABOUT US", tabUrl: "/about" },
  { tabName: "TEAM", tabUrl: "/team" },
  { tabName: "SERVICES", tabUrl: "/services" },
  { tabName: "CONTACT US", tabUrl: "/contact" },
];

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="flex flex-col-reverse lg:flex-col h-full w-full justify-center">
      <div className="hidden lg:flex">
        <DesktopTabSelector
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="flex lg:hidden">
        <MobileTabSelector
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="flex justify-center items-center mt-[1%] w-ull">
        {selectedTab === 0 && <Home setSelectedTab={setSelectedTab} />}
        {selectedTab === 1 && <About />}
        {selectedTab === 2 && <Team />}

        {selectedTab === 3 && <Services />}
        {selectedTab === 4 && <Contact />}
      </div>
    </div>
  );
};

export default HomePage;
