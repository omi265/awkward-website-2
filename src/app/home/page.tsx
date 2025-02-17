"use client";

import About from "@/components/PageSections/about";
import Home from "@/components/PageSections/awkard";
import Contact from "@/components/PageSections/contact";
import Team from "@/components/PageSections/team";
import Services from "@/components/PageSections/services";
import TabSelector from "@/components/TabSelector";
import React, { useState } from "react";

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
    <div className="flex h-full w-full justify-center flex-col">
      <TabSelector
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="flex justify-center items-center mt-10 w-full">
        {selectedTab === 0 && <Home />}
        {selectedTab === 1 && <About />}
        {selectedTab === 2 && <Team />}

        {selectedTab === 3 && <Services />}
        {selectedTab === 4 && <Contact />}
      </div>
    </div>
  );
};

export default HomePage;
