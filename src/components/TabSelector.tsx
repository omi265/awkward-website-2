"use client";
import React from "react";
import Image from "next/image";
import logo_wo_text from "../../public/AS_logo_wo_text.svg";
import { motion } from "motion/react";

const DesktopTabSelector = ({ tabs, selectedTab, setSelectedTab }: any) => {
  return (
    <div className="fixed top-[9%] justify-center items-center min-h-14 lg:w-[98.7%] xl:w-[98.9%] 2xl:w-[99.1%] border-r-[0px] border-l-[0px] border-t-[8px] border-b-[8px] border-black bg-[#D9D9D9]/70 backdrop-blur-md z-50">
      <div className="flex justify-between items-center h-14 divide-x-4 divide-black relative">
        {tabs.map((tab: any, index: number) => {
          const isSelected = selectedTab === index;
          return (
            <div
              key={index}
              className={`relative flex justify-center items-center text-xl h-full font-black cursor-pointer overflow-hidden transition-colors duration-300 ${
                tab.tabName === "CONTACT US" ? "border-r-[8px] border-black" : ""
              } flex-1`}
              onClick={() => setSelectedTab(index)}
            >
              {/* Sliding Background Pill */}
              {isSelected && (
                <motion.div
                  layoutId="desktopActiveTabPill"
                  className="absolute inset-0 bg-white z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              )}

              <div className="relative z-10 flex items-center space-x-3 text-black">
                {tab.tabName === "AWKWARD STUDIO" ? (
                  <div className="flex items-center space-x-3">
                    <Image
                      src={logo_wo_text}
                      width={38}
                      height={10}
                      alt="Logo"
                      className="object-contain"
                    />
                    <span className="hidden xl:inline">{tab.tabName}</span>
                  </div>
                ) : (
                  <span>{tab.tabName}</span>
                )}
              </div>
            </div>
          );
        })}
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
    <div className="flex fixed bottom-[3%] justify-center items-center border-r-[0px] border-l-[0px] border-t-[8px] border-b-[8px] border-black bg-[#D9D9D9]/70 backdrop-blur-md h-12 w-[95.8%] sm:w-[98.5%] md:w-[99.5%] z-50 text-[10px]">
      <div className="flex justify-between items-center h-12 divide-x-4 divide-black w-full relative">
        {tabs.map((tab: any, index: number) => {
          const isSelected = selectedTab === index;
          return (
            <div
              key={index}
              className="relative flex items-center justify-center flex-1 h-full font-black cursor-pointer overflow-hidden"
              onClick={() => setSelectedTab(index)}
            >
              {/* Sliding Background Pill */}
              {isSelected && (
                <motion.div
                  layoutId="mobileActiveTabPill"
                  className="absolute inset-0 bg-white z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              )}

              <div className="relative z-10 text-black px-1 truncate text-center">
                {tab.tabName === "AWKWARD STUDIO" ? (
                  <Image
                    src={logo_wo_text}
                    width={24}
                    height={10}
                    alt="Logo"
                    className="mx-auto"
                  />
                ) : (
                  <span className="truncate">{tab.tabName}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopTabSelector;
