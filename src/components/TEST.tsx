import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";

export default function ScrollTriggered() {
  return (
    <div className="flex flex-col w-full items-center space-y-32 lg:space-y-16 py-[5%]">
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
      viewport={{ amount: 0.2 }}
    >
      <div>
        <motion.div
          variants={cardVariants}
          className="flex justify-center items-center pb-0 pt-2 px-2 rounded-[20px] bg-white shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)] origin-[10%_60%] -mt-[50%] lg:-mt-0"
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
            {member.firstName} {member.lastName}, {member.designation} |{" "}
            <span className="italic font-semibold lg:font-bold">
              {member.tagline}
            </span>
          </div>
        </div>
        <div className="text-base lg:text-2xl mt-2 lg:mt-8 font-normal w-full">
          {member.description}
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
  // {
  //   memoji: "/rajan_sir_1.png",
  //   firstName: "Rajan",
  //   lastName: "Sharma",
  //   designation: "Director and Founder",
  //   tagline: "The Foundation of Awkward",
  //   description:
  //     "With over 27 years in the automotive retail industry, Rajan has built and led successful ventures across multiple brands, including General Motors, Maruti, Volvo Eicher, and Hyundai. A strategic visionary with deep market expertise, he continues to drive business growth through exceptional leadership and industry insight.",
  // },
  {
    memoji: "/rohit_1.png",
    firstName: "Rohit",
    lastName: "Mariwalla",
    designation: "Director",
    tagline: "The Backbone of Awkward",
    description:
      "A tech enthusiast since childhood, Rohit’s journey spans software engineering, business development, and entrepreneurship. With experience at Google, Searce, and Workplace by Facebook, he brings a unique blend of technology and strategy to Awkward Studio. His entrepreneurial spirit also led to the success of Cinnamon Stick, a premium dessert brand. Now, he’s focused on pushing creative and technological boundaries at Awkward.",
  },
  {
    memoji: "/omkar_1.png",
    firstName: "Omkar",
    lastName: "Mishra",
    designation: "Lead Software Engineer",
    tagline: "Turning Awkward Ideas into Seamless Code",
    description:
      "The youngest innovator in the Awkward squad, Omkar specializes in high-performing websites, automation, and AI-powered solutions. He’s helped businesses worldwide create seamless, intelligent digital experiences that work smarter, not harder. Whether optimizing workflows or experimenting with AI/ML, he’s always pushing boundaries to make bussinesses run faster, smoother, and way cooler.",
  },
  {
    memoji: "/jeanna_1.png",
    firstName: "Jeanna",
    lastName: "Udhwani",
    designation: "Design Lead & Marketing Head",
    tagline: "Making Awkward look Effortlessly Brilliant for Brands",
    description:
      "With 8+ years of experience in branding, design, and storytelling, Jeanna crafts compelling narratives that help brands connect and grow. Whether through visuals or words, she ensures every brand’s identity stands out and speaks volumes.",
  },
  {
    memoji: "/atique.png",
    firstName: "Atique",
    lastName: "Khan",
    designation: "Software Engineer",
    tagline: "Turning Awkward Challenges into Elegant Solutions",
    description:
      "From Backend magic to DevOps wizardry, he creates and transforms awkward workflows into streamlined systems that scale. With experience spanning healthcare, big data and automotive industries, he thrives on solving the unsolvable and optimizing the unoptimized. Hands-on at every stage of development, Fueled by curiosity and caffeine.",
  },
];
