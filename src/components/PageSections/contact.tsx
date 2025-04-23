"use client";

import React, { useState } from "react";
import Image from "next/image";
import omkar_2 from "../../../public/omkar_2.png";
import Circles from "../../../public/Circles.svg";
import loader from "../../../public/t3-loader.gif";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "motion/react";
import SocialIcons from "../SocialIcons";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SOCIALS = ["FB", "IG", "LI"];

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    // console.log(name, phone, email, message);
    // const isValidEmail = EMAIL_REGEX.test(email);
    if (!name || !phone || !email || !message) {
      alert("Please fill in all the fields!");
      return;
    }
    setIsSubmitting(true);
    await fetch(
      "https://script.google.com/macros/s/AKfycbxDW9WqZ3M2BG064lMRqMb7qDmySoM3pY_5eNXVIoyqzWtInDKlQapLPJ9AQDWGOv5Q/exec",
      {
        method: "POST",
        body: JSON.stringify({ data: [name, phone, email, message] }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Data sent successfully!");
        setIsSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      });

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      className="flex justify-center items-center w-[90%] lg:w-[80%] h-fit mt-[10%] lg:mt-[11%] pb-[35%] lg:pb-[20%]"
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center w-full text-center lg:text-left">
          <div
            className="text-lg lg:text-2xl font-semibold lg:font-normal w-full text-center
           lg:text-left"
          >
            We’d love to hear from you! whether it’s a service request, a wild
            idea, or just your thoughts on this delightfully awkward website.
            Drop us a message, and let’s create something amazing together!
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center h-full w-full mt-4">
          <div className="w-full">
            <div>
              <div className="text-xl lg:text-2xl font-extrabold">
                Slide into Our Mailbox!
              </div>
            </div>
            <div className="flex w-full mt-8 lg:mt-4">
              <div className="flex flex-col space-y-4 font-bold w-full">
                <div className="flex justify-evenly items-center space-x-5">
                  <Input
                    type="name"
                    placeholder="Name"
                    value={name}
                    // className="text-5xl"
                    className="rounded-full p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black "
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="phone"
                    placeholder="Phone"
                    value={phone}
                    className="rounded-full p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black "
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex justify-evenly items-center space-x-5">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="rounded-full p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Short Description"
                    value={message}
                    className="rounded-full p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                {/* <div className="w-full">
                  <Textarea
                    placeholder="Type your message here."
                    value={message}
                    className="rounded-3xl h-32 p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div> */}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between space-x-5 items-center w-full mt-8">
                <div>
                  {isSubmitted ? (
                    <div className="text-base font-bold mt-6 text-center lg:text-left">
                      "You Did It! 🎉 Your Message Has Landed in Our Awkward
                      Inbox!" Thanks for reaching out! We’ll get back to you
                      soon—until then, feel free to keep exploring our
                      delightfully awkward corner of the internet. Talk soon!
                    </div>
                  ) : (
                    <div className="flex">
                      <motion.div
                        className="text-base lg:text-xl font-bold lg:font-extrabold px-6 lg:px-4 py-2 border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSubmit}
                      >
                        Ready, Set, Slide!
                      </motion.div>
                      {isSubmitting && (
                        <>
                          <Image
                            src={loader}
                            width={60}
                            height={60}
                            alt="Logo"
                            className="object-cover"
                          />
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <motion.div layout className="flex flex-col space-y-5 mt-6">
              <div className="text-2xl font-bold">
                Or you can drop by our office(s) at:
              </div>
              <div className="flex space-x-10 items-center">
                <div className="flex flex-col space-y-3 max-w-xs">
                  <div className="text-2xl font-bold">Andheri</div>
                  <div className="text-lg font-medium">
                    102, The Meadows, Sahar Plaza, Andheri - Kurla Road, J.B.
                    Nagar, Andheri (East) Mumbai – 400 059.
                  </div>
                </div>
                <div className="flex flex-col space-y-3 max-w-xs">
                  <div className="text-2xl font-bold">Mira Road</div>
                  <div className="text-lg font-medium">
                    Fida Hussain Compound, Off Western Express Highway, Mira
                    Road (East), Mumbai - 401 104.
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="flex justify-between w-full mt-8 items-center">
              <div className="flex  space-x-5">
                <SocialIcons />
              </div>
              <div className="lg:hidden flex">
                <Image
                  src={"/Yellow_Diagonals.svg"}
                  width={140}
                  height={40}
                  alt="Logo"
                />
              </div>
              <div className="lg:flex hidden">
                <Image
                  src={"/Yellow_Diagonals.svg"}
                  width={200}
                  height={40}
                  alt="Logo"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full justify-between items-center">
            <div className="flex relative w-[70%] lg:w-full justify-center items-center mb-6 lg:mb-0">
              <Image
                src={omkar_2}
                width={500}
                height={400}
                alt="Logo"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
