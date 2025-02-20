import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import placeHolder1 from "../../../public/placeholder1.png";
import Circles from "../../../public/Circles.svg";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <motion.div
      className="mt-[15%] lg:mt-20 w-[90%] lg:w-[70%] mb-[35%]"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center w-full text-center lg:text-left">
          <div>
            <div className="text-3xl lg:text-5xl font-extrabold">
              Slide into Our Mailbox!
            </div>
          </div>
          <div className="text-lg lg:text-2xl mt-4 font-semibold lg:font-normal w-full text-justify lg:text-left">
            Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
            suspendisse neque.
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly items-center h-full w-full mt-10">
          <div className="w-full lg:w-[60%]">
            <div className="flex lg:w-[80%] w-full mt-8 lg:mt-0">
              <div className="flex flex-col space-y-8 font-bold w-full">
                <div className="flex justify-evenly items-center space-x-5">
                  <Input
                    type="name"
                    placeholder="Name"
                    // className="text-5xl"
                    className="rounded-full p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black "
                  />
                  <Input
                    type="phone"
                    placeholder="Phone"
                    className="rounded-full p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black "
                  />
                </div>
                <div className="w-full">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="rounded-full p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black"
                  />
                </div>
                <div className="w-full">
                  <Textarea
                    placeholder="Type your message here."
                    className="rounded-3xl h-32 p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start space-x-10 items-center w-full mt-10">
              <Button onClick={() => console.log("Submitted!")}>
                <motion.div
                  className="text-base lg:text-2xl font-bold lg:font-extrabold px-6 lg:px-4 py-2 border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Ready, Set, Slide!
                </motion.div>
              </Button>
            </div>
          </div>
          <div className="relative w-[80%] lg:w-full">
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
    </motion.div>
  );
};

export default Contact;
