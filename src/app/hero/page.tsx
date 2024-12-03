"use client";

import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import QuoteModal from "./quote-modal";

const Hero = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col justify-around items-center p-2 gap-10 md:flex-row">
          <div className="w-[90%] md:w-[60%] lg:w-[60%] flex flex-col items-start gap-5 font-rubik">
            <div className="text-4xl font-normal">
              Hi, I&apos;m <span className="font-bold">Isabella James</span> 🙋‍♀️
            </div>
            <div className="text-xl font-normal text-wrap">
              As a seasoned realtor with five years of invaluable experience, I
              am here to assist you in finding your dream home. Allow me to
              curate a selection of homes that perfectly match your unique
              preferences and requirements. Your ideal home is just a step away,
              and I am committed to making the process smooth and tailored to
              your needs
            </div>
          </div>
          <Avatar
            src="https://res.cloudinary.com/dq9alywlv/image/upload/v1733183132/f1c6pqo8hxp17kdzimop.jpg"
            //   size="lg"
            className="w-56 h-56"
            radius="full"
          />
        </div>
        <Button
          className="w-64 rounded-full px-4 py-2 font-rubik bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white"
          onClick={() => setIsOpen(true)}
        >
          Contact Me
        </Button>
      </div>
      <QuoteModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Hero;
