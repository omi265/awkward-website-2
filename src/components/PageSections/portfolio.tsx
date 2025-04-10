import { motion } from "motion/react";
import React from "react";
import Image from "next/image";

type Props = {};

const Portfolio = (props: Props) => {
  const logos = [
    "index_hyundai",
    "maruti",
    "tata_carcare",
    "t3_cars",
    "arogya_finance",
    "policy_dost",
    "cinnamon_stick",
    "rafa_collection",
    "best_dental",
  ];

  return (
    <motion.div
      className="flex justify-center items-center w-[90%] lg:w-[80%] h-fit mt-[10%] lg:mt-[10%] pb-[35%] lg:pb-[20%]"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center w-full text-center lg:text-left">
          <div>
            <div className="text-3xl lg:text-5xl font-extrabold">
              Our Clients
            </div>
          </div>
          <div
            className="text-lg lg:text-2xl mt-4 font-semibold lg:font-normal w-full text-center
       lg:text-left"
          >
            At Awkward Studio, our portfolio is more than a collection of
            logos—it's a visual narrative of digital transformation. Each
            project represents our commitment to turning brands from ordinary to
            unforgettable, proving that when creativity meets strategic
            thinking, magic happens. We don't just deliver solutions; we craft
            experiences that challenge the status quo, helping our clients stand
            out in a crowded digital landscape by embracing what makes them
            truly unique.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12 flex-wrap lg:space-y-0 space-y-4 items-center justify-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className={`relative ${
                logo == "maruti" || logo == "index_hyundai"
                  ? "w-full lg:w-96 h-20 lg:h-48"
                  : "min-w-48 h-32 lg:h-48"
              } `}
            >
              <Image
                src={`/client_logos/${logo}.svg`}
                alt="Client Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
