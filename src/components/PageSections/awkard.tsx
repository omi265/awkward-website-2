import React from "react";
import Image from "next/image";
import placeHolder1 from "../../../public/placeholder1.png";
import Circles from "../../../public/Circles.svg";

import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

const Home = ({ setSelectedTab }: any) => {
  return (
    <div className="flex justify-center items-center w-[70%] h-[600px]">
      <div className="flex justify-evenly items-center h-full w-full">
        <div className="text-5xl font-extrabold w-[60%]">
          <div>
            <div>The Process of creation</div>
            <div>
              is <span className="italic font-black">Awkward</span>
            </div>
          </div>
          <div className="text-2xl mt-4 font-normal w-[60%]">
            Innovation begins outside the comfort zone. Ready to write the next
            chapter in your brand story, awkwardly?
          </div>
          <div className="flex justify-start space-x-10 items-center w-full mt-10">
            <Button onClick={() => setSelectedTab(4)}>
              <motion.div
                className="text-2xl font-extrabold px-4 py-2 border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Get Started
              </motion.div>
            </Button>
            <Button onClick={() => setSelectedTab(1)}>
              <motion.div
                className="text-2xl font-extrabold px-4 py-2 border-[6px] rounded-full border-black bg-white shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Not Just Yet!
              </motion.div>
            </Button>
          </div>
        </div>
        <div className="relative w-[40%] h-[400px]">
          <Image
            src={Circles}
            width={450}
            height={400}
            alt="Logo"
            className="object-cover"
          />
          <Image
            src={placeHolder1}
            width={450}
            height={400}
            alt="Logo"
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
