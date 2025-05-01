import React from "react";
import Image from "next/image";
import rohit_2 from "../../../public/rohit_2.png";
import Circles from "../../../public/Circles.svg";

import { motion } from "motion/react";

const Home = ({ setSelectedTab }: any) => {
  return (
    <div className="flex justify-center items-center w-[90%] lg:w-[80%] h-fit lg:h-full lg:min-h-[700px] xl:min-h-[600px]">
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Yellow Concentrics - Top Left */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            // scale: [1, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute top-[65%] right-[5%] lg:top-[8%] lg:left-[5%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Concentrics.svg"}
            width={50}
            height={94}
            alt="Logo"
            className="lg:w-[164px]"
          />
        </motion.div>

        {/* Yellow Diagnals - Bottom Left */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            x: [-20, 0, -20],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute bottom-[95%]  left-[50%] lg:bottom-[15%] lg:left-[10%] hidden lg:flex"
        >
          <Image
            src={"/awkward_vectors/Yellow_Diagonals.svg"}
            width={400}
            height={53}
            alt="Logo"
            // className="lg:hidden"
          />
        </motion.div>

        {/* Grey Triangle -  center */}
        {/* <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute top-[65%] right-[80%] lg:top-[60%] lg:right-[48%]"
        >
          <Image
            src={"/landing_vectors/Light_Grey_Triangle.svg"}
            width={24}
            height={53}
            alt="Logo"
            className="lg:w-[68px]"
          />
        </motion.div> */}

        {/* Yellow Triangle -  Top Right */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute top-[25%] right-[88%] lg:top-[20%] lg:right-[10%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Triangle.svg"}
            width={24}
            height={53}
            alt="Logo"
            className="lg:w-[68px]"
          />
        </motion.div>

        {/* Grey Box -  Bpttom Right */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[10%] lg:bottom-[12%] lg:right-[8%]"
        >
          <Image
            src={"/landing_vectors/Light_Grey_Hollow_Box.svg"}
            width={34}
            height={53}
            alt="Logo"
            className="lg:w-[68px]"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="hidden lg:flex justify-evenly items-center h-full w-full z-20 lg:z-20"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="text-3xl lg:text-5xl font-extrabold w-[60%]">
          <div>
            <div>The Process of creation</div>
            <div>
              is <span className="italic font-black">Awkward</span>
            </div>
          </div>
          <div className="text-lg lg:text-2xl mt-4 font-normal w-[60%]">
            True innovation happens outside the comfort zone. Ready to embrace
            the awkward and craft the next chapter of your brand’s story? Let’s
            make something unforgettable.
          </div>
          <div className="flex justify-start space-x-10 items-center w-full mt-10">
            <motion.div
              className="text-2xl font-extrabold px-4 py-2 border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedTab(4)}
            >
              Get Started
            </motion.div>
            <motion.div
              className="text-2xl font-extrabold px-4 py-2 border-[6px] rounded-full border-black bg-white shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedTab(1)}
            >
              Not Just Yet!
            </motion.div>
          </div>
        </div>
        <div className="relative ">
          <Image
            src={Circles}
            width={450}
            height={400}
            alt="Logo"
            className="object-cover"
          />
          <Image
            src={rohit_2}
            width={450}
            height={400}
            alt="Logo"
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </motion.div>
      <div className="flex lg:hidden justify-center items-center w-full flex-col mt-[15%] mb-[30%]">
        <div className="text-3xl font-bold text-center">
          <div>The Process of creation</div>
          <div>
            is <span className="italic font-black">Awkward</span>
          </div>
          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7],
              x: [-20, 0, -20],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="flex w-full justify-center ml-5"
          >
            <Image
              src={"/awkward_vectors/Yellow_Diagonals.svg"}
              width={200}
              height={53}
              alt="Logo"
              className="lg:hidden"
            />
          </motion.div>
        </div>
        <div className="relative mt-10">
          <Image
            src={Circles}
            width={250}
            height={400}
            alt="Logo"
            className="object-cover"
          />
          <Image
            src={rohit_2}
            width={250}
            height={400}
            alt="Logo"
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="text-xl mt-10 font-semibold w-full text-center">
          Innovation begins outside the comfort zone. Ready to write the next
          chapter in your brand story, awkwardly?
        </div>
        <div className="flex flex-col justify-center space-y-3 items-center w-full mt-10">
          <motion.div
            className="text-lg font-black px-6 py-2 border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedTab(4)}
          >
            Get Started
          </motion.div>
          <motion.div
            className="text-base font-bold px-6 py-2 border-[6px] rounded-full border-black bg-white shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedTab(1)}
          >
            Not Just Yet!
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
