"use client";

import React, { useState } from "react";
import Image from "next/image";
import omkar_2 from "../../../public/omkar_2.png";
import Circles from "../../../public/Circles.svg";
import loader from "../../../public/t3-loader.gif";
import { Input } from "@/components/ui/input";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import SocialIcons from "@/components/SocialIcons";
import Script from "next/script";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mouse variables for jiggling the right half image
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 180 };
  const mouseX = useSpring(rawX, springConfig);
  const mouseY = useSpring(rawY, springConfig);

  const transImgX = useTransform(mouseX, (x) => x * 15);
  const transImgY = useTransform(mouseY, (y) => y * 15);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    rawX.set((clientX - innerWidth / 2) / (innerWidth / 2));
    rawY.set((clientY - innerHeight / 2) / (innerHeight / 2));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  // Magnetic button state
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setBtnOffset({ x: x * 0.45, y: y * 0.45 });
  };

  const handleBtnMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  const handleSubmit = async () => {
    if (!name || !phone || !email || !message) {
      alert("Please fill in all the fields!");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxDW9WqZ3M2BG064lMRqMb7qDmySoM3pY_5eNXVIoyqzWtInDKlQapLPJ9AQDWGOv5Q/exec",
        {
          method: "POST",
          body: JSON.stringify({ data: [name, phone, email, message] }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data, "Data sent successfully!");
      setIsSubmitted(true);

      if (
        typeof window !== "undefined" &&
        typeof (window as any).gtag_report_conversion === "function"
      ) {
        (window as any).gtag_report_conversion();
      }

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center w-[90%] lg:w-[80%] h-fit py-8 lg:py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              send_to: 'AW-17193759007/78L_CMrqoNkaEJ_iz4ZA',
              value: 1.0,
              currency: 'INR'
            });
          `,
        }}
      />
      <div className="flex flex-col w-full h-full z-10 text-black">
        {/* Editorial Heading */}
        <div className="flex flex-col justify-center w-full text-left">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight text-left">
            Let’s build something <span className="font-serif-display italic font-black text-black border-b-[4px] border-[#F8C419]">Remarkable</span>
          </h2>
          <p className="text-base lg:text-xl mt-4 font-normal text-slate-600 leading-relaxed text-left max-w-2xl">
            We’d love to hear from you! Whether it’s a service request, a wild
            idea, or just your thoughts on this delightfully awkward website.
            Drop us a message, and let’s create something amazing together!
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-full w-full mt-10 gap-10">
          <div className="w-full lg:w-[60%] flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-black text-black tracking-tight">
                Slide into Our Mailbox!
              </h3>
            </div>

            {/* Redesigned Form Fields with Bottom Border Lines */}
            <div className="flex flex-col space-y-6 w-full">
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="border-b-[3px] border-black bg-transparent rounded-none px-2 py-3 placeholder:italic placeholder:font-semibold placeholder:text-gray-400 focus:border-[#F8C419] outline-none transition-colors duration-300 w-full font-bold text-lg"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="relative w-full">
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    className="border-b-[3px] border-black bg-transparent rounded-none px-2 py-3 placeholder:italic placeholder:font-semibold placeholder:text-gray-400 focus:border-[#F8C419] outline-none transition-colors duration-300 w-full font-bold text-lg"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="border-b-[3px] border-black bg-transparent rounded-none px-2 py-3 placeholder:italic placeholder:font-semibold placeholder:text-gray-400 focus:border-[#F8C419] outline-none transition-colors duration-300 w-full font-bold text-lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Short Description"
                    value={message}
                    className="border-b-[3px] border-black bg-transparent rounded-none px-2 py-3 placeholder:italic placeholder:font-semibold placeholder:text-gray-400 focus:border-[#F8C419] outline-none transition-colors duration-300 w-full font-bold text-lg"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Actions & Submit */}
            <div className="flex flex-col w-full pt-4">
              <div className="flex justify-start items-center space-x-6">
                {isSubmitted ? (
                  <div className="text-sm lg:text-base font-bold bg-[#F8C419]/10 border-l-4 border-[#F8C419] p-4 rounded-r-lg">
                    <strong>You Did It! 🎉 Your Message Has Landed in Our Awkward Inbox!</strong><br />
                    Thanks for reaching out! We’ll get back to you soon—until then, feel free to keep exploring our delightfully awkward corner of the internet. Talk soon!
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="text-lg lg:text-xl font-black px-6 py-3 border-[4px] rounded-full border-black bg-[#F8C419] shadow-[4px_4px_0px_#000] cursor-pointer"
                      onMouseMove={handleBtnMouseMove}
                      onMouseLeave={handleBtnMouseLeave}
                      style={{ x: btnOffset.x, y: btnOffset.y }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubmit}
                      data-cursor-text="SEND"
                    >
                      Ready, Set, Slide!
                    </motion.div>
                    {isSubmitting && (
                      <Image
                        src={loader}
                        width={40}
                        height={40}
                        alt="Loader"
                        className="object-cover"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Offices Row */}
            <div className="flex flex-col space-y-4 pt-6 border-t-[2px] border-black/10">
              <h4 className="text-xl font-black text-black">
                Or drop by our office(s) at:
              </h4>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex flex-col space-y-2 max-w-xs">
                  <span className="text-lg font-black border-b-2 border-[#F8C419] w-max">Andheri</span>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    102, The Meadows, Sahar Plaza, Andheri - Kurla Road, J.B.
                    Nagar, Andheri (East) Mumbai – 400 059.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 max-w-xs">
                  <span className="text-lg font-black border-b-2 border-[#F8C419] w-max">Mira Road</span>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    Fida Hussain Compound, Off Western Express Highway, Mira
                    Road (East), Mumbai - 401 107.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex justify-between w-full pt-6 border-t-[2px] border-black/10 items-center">
              <div className="flex space-x-5">
                <SocialIcons />
              </div>
              <div>
                <Image
                  src={"/Yellow_Diagonals.svg"}
                  width={150}
                  height={40}
                  alt="Diagonals"
                  className="opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Restore original image placement for right half of the page with mouse movement jiggle */}
          <div className="w-full lg:w-[40%] flex justify-center items-center h-full">
            <motion.div
              style={{ x: transImgX, y: transImgY }}
              className="relative flex justify-center items-center w-[70%] lg:w-full pointer-events-none"
            >
              <Image
                src={omkar_2}
                width={500}
                height={400}
                alt="Logo"
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
