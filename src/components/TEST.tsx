import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function ScrollTriggered() {
  return (
    <div className="flex flex-col w-full items-center space-y-32 lg:space-y-16 pt-[20%]">
      {food.map(([emoji], i) => (
        <Card i={i} emoji={emoji} key={emoji} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  i: number;
}

function Card({ emoji }: CardProps) {
  return (
    <motion.div
      className="relative flex flex-col lg:flex-row items-center w-full snap-start lg:snap-center h-fit lg:h-[430px] lg:overflow-hidden bg-[#F8C419] rounded-2xl p-3 lg:p-10 border-4 border-black scroll-mt-32 lg:scroll-mt-0"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
    >
      <div>
        <motion.div
          variants={cardVariants}
          className="flex justify-center items-center lg:p-5 rounded-[20px] bg-[#f5f5f5] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)] origin-[10%_60%] text-[108px] lg:text-[164px] -mt-[50%] lg:-mt-0"
        >
          {emoji}
        </motion.div>
      </div>

      <div className="flex flex-col justify-center text-lg lg:text-3xl font-bold lg:font-extrabold w-full text-left lg:ml-10 mt-3 lg:mt-0">
        <div>
          <div>First Name Last Name | Designation</div>
        </div>
        <div className="text-base lg:text-2xl mt-2 lg:mt-8 font-normal w-full">
          Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
          suspendisse neque. Auctor et dignissim elementum sed aliquam porttitor
          diam. Vitae aliquet fames diam curabitur. Sit suscipit diam eget quis
          risus mattis turpis mauris. Volutpat egestas enim vulputate cursus
        </div>
      </div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
];
