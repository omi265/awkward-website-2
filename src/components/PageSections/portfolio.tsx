import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import LogoCarousel from "../LogoScrollBar";

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
    "ida",
    "index_fleet",
    "ank_logo_orange",
  ];

  return (
    <motion.div
      className="flex justify-center items-center w-[90%] lg:w-[80%] h-fit lg:my-[15%]"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col w-full mt-[10%] lg:mt-0 mb-[35%] lg:mb-0">
        <div className="flex flex-col justify-center w-full text-center lg:text-left">
          <div>
            <div className="text-3xl lg:text-5xl font-extrabold">
              Our Clients
            </div>
          </div>
          <div
            className="text-lg lg:text-2xl mt-4 font-semibold lg:font-normal w-full text-center
       lg:text-left mb-12 lg:mb-2"
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
                  ? "w-[75%] lg:w-96 h-20 lg:h-48 max-w-96"
                  : "min-w-48 h-32 lg:h-48"
              } `}
            >
              <Image
                src={`${
                  logo == "ank_logo_orange"
                    ? `/client_logos/${logo}.png`
                    : `/client_logos/${logo}.svg`
                }`}
                alt="Client Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
        {/* <LogoCarousel logos={logos} /> */}
      </div>
    </motion.div>
  );
};

export default Portfolio;
