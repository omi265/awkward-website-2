"use client";

import React from "react";

const TabSelector = ({ tabs, selectedTab, setSelectedTab }: any) => {
  return (
    <div className="sticky top-20 justify-center items-center min-h-14 w-full border-r-[10px] border-l-[10px] border-b-[10px] border-black bg-[#D9D9D9] z-10 scroll-mt-1">
      <div className="flex justify-between items-center h-14 divide-x-8 divide-black">
        {tabs.map((tab: any, index: number) => (
          <div
            key={index}
            className={`${
              selectedTab === index
                ? "bg-white flex-1 w-[40%]"
                : "bg-[#D9D9D9] flex-none w-[15%]"
            } flex justify-center items-center text-2xl h-full font-black cursor-pointer`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.tabName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
