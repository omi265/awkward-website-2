"use client";

import React from "react";
import Image from "next/image";
import logo_wo_text from "../../public/AS_logo_wo_text.svg";

const DesktopTabSelector = ({ tabs, selectedTab, setSelectedTab }: any) => {
  return (
    <div className="sticky top-[9%] justify-center items-center min-h-14 w-full border-r-[0px] border-l-[0px] border-b-[10px] border-black bg-[#D9D9D9] z-10 scroll-mt-1">
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
            {tab.tabName == "AWKWARD STUDIO" && selectedTab != 0 ? (
              <>
                <Image src={logo_wo_text} width={42} height={10} alt="Logo" />
              </>
            ) : (
              <>
                {tab.tabName == "AWKWARD STUDIO" ? (
                  <div className="flex space-x-3">
                    <Image
                      src={logo_wo_text}
                      width={42}
                      height={10}
                      alt="Logo"
                    />{" "}
                    <div>{tab.tabName}</div>
                  </div>
                ) : (
                  <>{tab.tabName}</>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const MobileTabSelector = ({
  tabs,
  selectedTab,
  setSelectedTab,
}: any) => {
  return (
    <div className="flex fixed bottom-[5%] justify-center items-center border-r-[0px] border-l-[0px] border-t-[10px] border-black bg-[#D9D9D9] h-14 w-[95.8%] sm:w-[98%] z-10 text-xs">
      <div className="flex justify-between items-center h-14 divide-x-8 divide-black w-full">
        {tabs.map((tab: any, index: number) => (
          <div
            key={index}
            className={`${
              selectedTab === index
                ? "bg-white flex-1 w-[40%] justify-center"
                : "bg-[#D9D9D9] flex-none w-[15%] justify-start pl-1"
            } flex items-center h-full font-black cursor-pointer`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.tabName == "AWKWARD STUDIO" && selectedTab != 0 ? (
              <>
                <Image src={logo_wo_text} width={28} height={10} alt="Logo" />
              </>
            ) : (
              <>
                {tab.tabName == "AWKWARD STUDIO" ? (
                  <div className="flex space-x-3">
                    <Image
                      src={logo_wo_text}
                      width={28}
                      height={10}
                      alt="Logo"
                    />
                  </div>
                ) : (
                  <div className="truncate">{tab.tabName}</div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopTabSelector;
