import { motion, useAnimation } from "motion/react";
import React, { useEffect, useState } from "react";
import DeskTopPreLoaderAnimation from "./DeskTopPreLoaderAnimation";
import MobilePreLoaderAnimation from "./MobilePreLoaderAnimation";

const WebWindow = ({ children }: any) => {
  return (
    <div className="h-dvh w-dvw bg-black justify-center items-center p-2 z-50">
      <div className="bg-white text-black h-full w-full overflow-auto rounded-2xl">
        <DeskTopPreLoaderAnimation />
        <div>{children}</div>
      </div>
      <div className="hidden fixed bottom-2 right-2 z-0 rounded-lg bg-white lg:flex text-black px-2 py-1 text-xs">
        © Designed by AwkwardStudio , Memoji by Apple Inc.
      </div>
      <MobilePreLoaderAnimation />

      {/* <div className="flex justify-center items-center w-full">
        <div className="fixed  bottom-2 z-0 rounded-2xl bg-white text-black px-4 py-2 w-full">
          © Designed by AwkwardStudio , Memoji by Apple Inc.
        </div>
      </div> */}
    </div>
  );
};

export default WebWindow;
