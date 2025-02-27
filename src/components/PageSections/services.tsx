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
        <div className="flex flex-col lg:flex-row items-start justify-evenly mt-8 w-full space-x-0 lg:space-x-10 space-y-10 lg:space-y-0 ">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="">
              <Image
                src={tech}
                width={180}
                height={400}
                alt={"Software Development"}
              />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-center mb-4 lg:mb-8 ">
              Software Development
            </div>
            <div className="text-lg lg:text-2xl font-normal text-justify w-full lg:w-[85%]">
              We specialize in building robust software solutions, crafting
              websites and applications that are both functional and visually
              stunning. From automation software to AI and machine
              learning-enabled technologies, we bring intelligent, future-ready
              solutions to life.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="">
              <Image
                src={design}
                width={180}
                height={400}
                alt={"Graphic Design"}
              />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-center mb-4 lg:mb-8 ">
              Graphic Design
            </div>
            <div className="text-lg lg:text-2xl font-normal text-justify w-full lg:w-[85%]">
              We offer comprehensive branding solutions that seamlessly
              integrate across both online and offline platforms. Whether you
              need a striking logo or a complete brand identity, our design
              expertise ensures your brand stands out with clarity and impact.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="">
              <Image
                src={marketing}
                width={180}
                height={400}
                alt={"Digital Marketing"}
              />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-center mb-4 lg:mb-8 ">
              Digital Marketing
            </div>
            <div className="text-lg lg:text-2xl font-normal text-justify w-full lg:w-[85%]">
              We help businesses build a strong digital presence through
              strategic brand positioning and targeted marketing. Our approach
              focuses on enhancing brand awareness, driving lead generation, and
              boosting sales. By fostering customer engagement, we turn
              audiences into loyal communities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
