import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SOCIALS = [
  {
    icon: "FB",
    link: "https://www.instagram.com/awkward__studio/",
  },
  {
    icon: "LI",
    link: "https://www.linkedin.com/company/awkward-studio/",
  },
  {
    icon: "IG",
    link: "https://www.instagram.com/awkward__studio/",
  },
];

export default function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-4">
      {SOCIALS.map((social, index) => (
        <motion.div
          key={index}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open(social.link, "_blank")}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            src={`/${
              hoveredIndex === index ? `${social.icon}_Hover` : social.icon
            }.png`}
            alt={`${social} logo`}
            width={40}
            height={40}
          />
        </motion.div>
      ))}
    </div>
  );
}
