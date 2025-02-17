import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function ScrollTriggered() {
  return (
    <div className="flex flex-col w-full items-center space-y-16">
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
      className="relative flex items-center w-full snap-center h-[430px] overflow-hidden bg-[#F8C419] rounded-2xl p-10 border-4 border-black"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
    >
      <div>
        <div
        // style={{
        //   clipPath: `path("M 0 242.8 C 0 233.9632 7.2 228.08 16 226.8 L 368 175.6 C 376.08 174.4 384 182.7632 384 191.6 L 400 344 C 400 352.8 392.8 360 384 360 L 16 360 C 7.2 360 0 352.8 0 344 Z")`,
        // }}
        // className="flex absolute left-0 top-0 right-0 bottom-0 bg-[#F8C419]"
        />
        <motion.div
          variants={cardVariants}
          className="ml-16 w-[280px] h-[330px] flex justify-center items-center rounded-[20px] bg-[#f5f5f5] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)] origin-[10%_60%] text-[164px]"
        >
          {emoji}
        </motion.div>
      </div>

      <div className="flex flex-col justify-center text-4xl font-extrabold w-full text-left ml-32 mt-20">
        <div>
          <div>First Name Last Name | Designation</div>
        </div>
        <div className="text-2xl mt-8 font-normal w-full">
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
    y: 300,
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
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];
