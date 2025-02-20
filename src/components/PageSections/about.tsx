import { motion } from "motion/react";
import React from "react";

const About = () => {
  return (
    <motion.div
      className="flex justify-center items-center w-[95%] lg:w-[70%] mt-[10%]"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col justify-evenly items-center h-full w-full">
        <div className="elementScroll rounded-2xl w-full h-[600px] space-y-5 lg:space-y-10 lg:overflow-y-scroll lg:snap-y snap-mandatory">
          <div className=" flex flex-col justify-start text-3xl lg:text-5xl font-extrabold lg:h-[550px] lg:snap-center text-left mr-1 lg:mr-5 lg:bg-[#F8C419] lg:border-4 lg:border-black rounded-2xl p-5">
            <div>
              <div className="text-center lg:text-left">
                The Foundation of{" "}
                <span className="italic font-black">Awkwardness</span>
              </div>
            </div>
            <div className="text-lg lg:text-2xl mt-4 font-normal w-full text-justify lg:text-left">
              Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
              suspendisse neque. Auctor et dignissim elementum sed aliquam
              porttitor diam. Vitae aliquet fames diam curabitur. Sit suscipit
              diam eget quis risus mattis turpis mauris. Volutpat egestas enim
              vulputate cursus scelerisque. Nunc mauris congue sagittis maecenas
              massa mauris curabitur pharetra vulputate. Elementum id egestas
              justo at montes. Mattis hac elit id at porta mi aliquet enim.
              Lectus neque tempor semper rhoncus viverra vulputate. Est velit
              vitae in imperdiet lacus turpis nunc non adipiscing. Pretium
              venenatis viverra id imperdiet nibh massa fringilla.
            </div>
          </div>
          <div className=" flex flex-col justify-start text-3xl lg:text-5xl font-extrabold lg:h-[550px] lg:snap-center text-left mr-1 lg:mr-5 lg:bg-[#F8C419] lg:border-4 lg:border-black rounded-2xl p-5">
            <div>
              <div className="text-center lg:text-left">Core Values</div>
            </div>
            <div className="text-lg lg:text-2xl mt-4 font-normal w-full text-justify lg:text-left pb-20">
              Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
              suspendisse neque. Auctor et dignissim elementum sed aliquam
              porttitor diam. Vitae aliquet fames diam curabitur. Sit suscipit
              diam eget quis risus mattis turpis mauris. Volutpat egestas enim
              vulputate cursus scelerisque. Nunc mauris congue sagittis maecenas
              massa mauris curabitur pharetra vulputate. Elementum id egestas
              justo at montes. Mattis hac elit id at porta mi aliquet enim.
              Lectus neque tempor semper rhoncus viverra vulputate. Est velit
              vitae in imperdiet lacus turpis nunc non adipiscing. Pretium
              venenatis viverra id imperdiet nibh massa fringilla.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
