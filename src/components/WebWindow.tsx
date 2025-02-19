import { motion, useAnimation } from "motion/react";
import React, { useEffect, useState } from "react";
import DeskTopPreLoaderAnimation from "./DeskTopPreLoaderAnimation";

const WebWindow = ({ children }: any) => {
  return (
    <div className="flex h-dvh w-dvw bg-black justify-center items-center p-2">
      <div className="bg-white text-black h-full w-full overflow-hidden rounded-2xl">
        <DeskTopPreLoaderAnimation />
        <div>{children}</div>
        <div className="fixed flex bottom-5 w-full justify-center items-center">
          © Designed by AwkwardStudio , Memoji by Apple Inc.
        </div>
      </div>
    </div>
  );
};

export default WebWindow;
