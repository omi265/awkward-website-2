"use client";

import TabSelector from "@/components/TabSelector";
import React, { useState } from "react";

type Props = {};

const tabs = [
  { tabName: "AWKWARD STUDIO", tabUrl: "/home" },
  { tabName: "ABOUT US", tabUrl: "/about" },
  { tabName: "SERVICES", tabUrl: "/services" },
  { tabName: "CONTACT US", tabUrl: "/contact" },
];

const HomePage = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="flex h-full w-full justify-center">
      <TabSelector
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="text-3xl font-black mt-20"> Home</div>
    </div>
  );
};

export default HomePage;
