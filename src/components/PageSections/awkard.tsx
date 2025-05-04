import React from "react";
import Image from "next/image";
import rohit_2 from "../../../public/rohit_2.png";
import Circles from "../../../public/Circles.svg";

import { motion } from "motion/react";

const Home = ({ setSelectedTab }: any) => {
  return (
    <div className="relative flex justify-center items-center w-[90%] lg:w-[80%]">
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Yellow Concentrics */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[6%] left-[-2%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Concentrics.svg"}
            width={164}
            height={94}
            alt="Logo"
          />
        </motion.div>

        {/* Yellow Triangle */}
        <motion.div
          animate={{ rotate: [0, 180, 360] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[22%] right-[-5%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Triangle.svg"}
            width={68}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Light Grey Triangle */}
        <motion.div
          animate={{ rotate: [0, 45, 0, -45, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[57%] left-[50%]"
        >
          <Image
            src={"/awkward_vectors/Light_Grey_Triangle.svg"}
            width={53}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Light Grey Hollow Box */}
        <motion.div
          animate={{ rotate: [0, 180, 360] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:flex  top-[72%] right-[-5%]"
        >
          <Image
            src={"/awkward_vectors/Light_Grey_Hollow_Box.svg"}
            width={68}
            height={53}
            alt="Logo"
          />
        </motion.div>

        {/* Yellow Diagonals */}
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
          className="absolute hidden lg:flex  top-[77%] left-[5%]"
        >
          <Image
            src={"/awkward_vectors/Yellow_Diagonals.svg"}
            width={160}
            height={53}
            alt="Logo"
            className="lg:w-[400px]"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="lg:flex justify-center items-center hidden h-screen"
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
      <div className="flex lg:hidden justify-center items-center w-full flex-col min-h-screen h-fit my-24">
        <div className="text-3xl font-bold text-center">
          <div>The Process of creation</div>
          <div>
            is <span className="italic font-black">Awkward</span>
          </div>
          {/* <motion.div
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
          </motion.div> */}
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
