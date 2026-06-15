import React from "react";
import DeskTopPreLoaderAnimation from "./DeskTopPreLoaderAnimation";
import MobilePreLoaderAnimation from "./MobilePreLoaderAnimation";

const WebWindow = ({ children }: any) => {
  return (
    <div className="h-dvh w-dvw bg-black justify-center items-center p-2 z-50">
      {/* Scrollable Container with custom class web-window-scroll */}
      <div className="web-window-scroll bg-white text-black h-[97%] lg:h-full w-full overflow-y-auto overflow-x-hidden overscroll-none rounded-2xl relative">
        <DeskTopPreLoaderAnimation />
        <div className="web-window-content-inner">{children}</div>
      </div>
      <div className="hidden fixed bottom-2 right-2 z-0 rounded-2xl bg-white lg:flex text-black px-2 py-1 text-xs">
        © Designed by AwkwardStudio ( Brand name of Mindise Private Limited ) ,
        Memoji by Apple Inc.
      </div>
      <MobilePreLoaderAnimation />
    </div>
  );
};

export default WebWindow;
