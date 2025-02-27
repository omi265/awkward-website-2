import React from "react";
import Image from "next/image";
import tech from "../../../public/tech_services.png";
import marketing from "../../../public/marketing_services.png";
import design from "../../../public/design_services.png";

const Services = () => {
  return (
    <div className="flex justify-center items-center w-[90%] lg:w-[80%] h-fit mt-[10%] pb-[30%] lg:mt-[8%] lg:pb-[10%]">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center text-3xl lg:text-5xl font-extrabold w-full text-center lg:text-left">
          <div>
            <div>Our Services</div>
          </div>
          <div className="text-lg lg:text-2xl mt-8 lg:mt-4 font-semibold lg:font-normal w-full text-justify lg:text-left">
            At Awkward Studio, our team of young, creative minds thrives on
            innovation, delivering cutting-edge solutions that stand out in the
            digital space.
          </div>
        </div>
        <div className="flex flex-col items-start justify-evenly mt-20 w-full space-y-16">
          <div className="flex flex-col lg:flex-row space-x-0 space-y-5 lg:space-y-0 lg:space-x-10 items-center lg:items-start">
            <div className="">
              <div className="flex justify-center items-center w-[200px] pb-0 pt-2 px-2 rounded-[20px] bg-[#F8C419] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)] ">
                <Image
                  src={tech}
                  width={128}
                  height={400}
                  alt={"Software Development"}
                  className="inline lg:hidden"
                />
                <Image
                  src={tech}
                  width={200}
                  height={400}
                  alt={"Software Development"}
                  className="hidden lg:inline"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4 lg:mb-8 ">
                Software Development
              </div>
              <div className="text-lg lg:text-2xl font-normal text-justify w-full">
                We specialize in building robust software solutions, crafting
                websites and applications that are both functional and visually
                stunning. From automation software to AI and machine
                learning-enabled technologies, we bring intelligent,
                future-ready solutions to life.
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-x-0 space-y-5 lg:space-y-0 lg:space-x-10 items-center lg:items-start">
            <div className="">
              <div className="flex justify-center items-center w-[200px] pb-0 pt-2 px-2 rounded-[20px] bg-[#F8C419] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)] ">
                <Image
                  src={design}
                  width={128}
                  height={400}
                  alt={"Graphic Design"}
                  className="inline lg:hidden"
                />
                <Image
                  src={design}
                  width={200}
                  height={400}
                  alt={"Graphic Design"}
                  className="hidden lg:inline"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4 lg:mb-8 ">
                Graphic Design
              </div>
              <div className="text-lg lg:text-2xl font-normal text-justify w-full">
                We offer comprehensive branding solutions that seamlessly
                integrate across both online and offline platforms. Whether you
                need a striking logo or a complete brand identity, our design
                expertise ensures your brand stands out with clarity and impact.
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row space-x-0 space-y-5 lg:space-y-0 lg:space-x-10 items-center lg:items-start">
            <div className="">
              <div className="flex justify-center items-center w-[200px] pb-0 pt-2 px-2 rounded-[20px] bg-[#F8C419] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)]">
                <Image
                  src={marketing}
                  width={128}
                  height={400}
                  alt={"Digital Marketing"}
                  className="inline lg:hidden"
                />
                <Image
                  src={marketing}
                  width={200}
                  height={400}
                  alt={"Digital Marketing"}
                  className="hidden lg:inline"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4 lg:mb-8 ">
                Digital Marketing
              </div>
              <div className="text-lg lg:text-2xl font-normal text-justify w-full">
                We help businesses build a strong digital presence through
                strategic brand positioning and targeted marketing. Our approach
                focuses on enhancing brand awareness, driving lead generation,
                and boosting sales. By fostering customer engagement, we turn
                audiences into loyal communities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
