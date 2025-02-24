"use client";

import React, { useState } from "react";
import Image from "next/image";
import omkar_2 from "../../../public/omkar_2.png";
import Circles from "../../../public/Circles.svg";
import loader from "../../../public/t3-loader.gif";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "motion/react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
        }, 3000);
      });

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      className="flex justify-center items-center w-[90%] lg:w-[80%] h-fit mt-[10%] lg:mt-[5%] pb-[35%] lg:pb-0"
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
          <div
            className="text-lg lg:text-2xl mt-4 font-semibold lg:font-normal w-full text-center
           lg:text-left"
          >
            Lorem ipsum dolor sit amet consectetur. Turpis dictum mattis
            suspendisse neque.
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center h-full w-full mt-10">
          <div className="w-full">
            <div className="flex lg:w-[80%] w-full mt-8 lg:mt-0">
              <div className="flex flex-col space-y-8 font-bold w-full">
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
                <div className="w-full">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="rounded-full p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <Textarea
                    placeholder="Type your message here."
                    value={message}
                    className="rounded-3xl h-32 p-5 w-full placeholder:italic placeholder:font-bold placeholder:text-gray-400 border-4 border-black"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-start space-x-10 items-center w-full mt-10">
                <motion.div
                  className="text-base lg:text-2xl font-bold lg:font-extrabold px-6 lg:px-4 py-2 border-[6px] rounded-full border-black bg-[#F8C419] shadow-2xl cursor-pointer"
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
              {isSubmitted && (
                <div className="text-2xl font-bold mt-6 text-center lg:text-left">
                  Thank You for reaching out to us. We will reach out to you
                  shortly!
                </div>
              )}
            </div>
          </div>
          <div className="relative w-[60%] lg:w-[60%]">
            <Image
              src={Circles}
              width={450}
              height={400}
              alt="Logo"
              className="object-cover"
            />
            <Image
              src={omkar_2}
              width={450}
              height={400}
              alt="Logo"
              className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
