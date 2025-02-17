import React from "react";
import Image from "next/image";
import placeHolder1 from "../../../public/placeholder1.png";
import Circles from "../../../public/Circles.svg";

import { Button } from "../ui/button";

const Home = () => {
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
            <Button className="text-2xl font-extrabold p-5" variant={"awkward"}>
              Get Started
            </Button>
            <Button
              className="text-2xl font-bold p-5 bg-white"
              variant={"awkward"}
            >
              Not Just Yet!
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
