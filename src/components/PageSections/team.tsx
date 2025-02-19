import React from "react";
import ScrollTriggered from "../TEST";

const Team = () => {
  return (
    <div className="flex justify-center items-center w-[95%] lg:w-[70%] mt-[10%] lg:mt-[5%]">
      <div className="flex flex-col justify-evenly items-center h-full w-full">
        <div className="flex flex-col justify-center text-3xl lg:text-5xl font-extrabold w-full text-left">
          <div>
            <div className="text-center lg:text-left">The Team</div>
          </div>
          <div className="text-lg lg:text-2xl mt-4 font-semibold w-full text-justify lg:text-left">
            Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
            suspendisse neque. Auctor et dignissim elementum sed aliquam
            porttitor diam. Vitae aliquet fames diam curabitur. Sit suscipit
            diam eget quis risus mattis turpis mauris. Volutpat egestas enim
            vulputate cursus scelerisque. Nunc mauris
          </div>
        </div>
        <div className="elementScroll w-full h-[30rem] lg:h-[450px] overflow-y-scroll snap-y snap-mandatory mt-6 lg:mt-8 pr-1 lg:pr-5 mb-[25%] lg:mb-0">
          <ScrollTriggered />
        </div>
      </div>
    </div>
  );
};

export default Team;
