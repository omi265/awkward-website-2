import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";

export default function ScrollTriggered() {
  return (
    <div className="flex flex-col w-full items-center space-y-32 lg:space-y-16 pt-[25%]">
      {Team.map((member: any, i: number) => (
        <Card i={i} member={member} key={i} />
      ))}
    </div>
  );
}

function Card({ member }: any) {
  return (
    <motion.div
      className="relative flex flex-col lg:flex-row items-center w-full snap-center h-fit lg:overflow-hidden bg-[#F8C419] rounded-2xl p-4 lg:p-10 border-4 border-black scroll-mt-32 lg:scroll-mt-0 snap-mandatory"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.45 }}
    >
      <div>
        <motion.div
          variants={cardVariants}
          className="flex justify-center items-center pb-0 pt-2 px-2 rounded-[20px] bg-[#f5f5f5] shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)] origin-[10%_60%] -mt-[50%] lg:-mt-0"
        >
          <Image
            src={member.memoji}
            width={128}
            height={400}
            alt={member.firstName}
            className="inline lg:hidden"
          />
          <Image
            src={member.memoji}
            width={350}
            height={400}
            alt={member.firstName}
            className="hidden lg:inline"
          />
        </motion.div>
      </div>

      <div className="flex flex-col justify-center text-lg lg:text-3xl font-bold lg:font-extrabold w-full text-left lg:ml-10 mt-3 lg:mt-0">
        <div>
          <div>
            {member.firstName} {member.lastName} | {member.designation}
          </div>
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
    y: -10,
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

const Team: any[] = [
  {
    memoji: "/placeholder1.png",
    firstName: "Rajan",
    lastName: "Sharma",
    designation: "Director and Founder",
  },
  {
    memoji: "/rohit_1.png",
    firstName: "Rohit",
    lastName: "Mariwalla",
    designation: "Director",
  },
  {
    memoji: "/omkar_1.png",
    firstName: "Omkar",
    lastName: "Mishra",
    designation: "Lead Software Engineer",
  },
  {
    memoji: "/jeanna_1.png",
    firstName: "Jeanna",
    lastName: "Udhwani",
    designation: "Design Lead, and Marketing Head",
  },
];
