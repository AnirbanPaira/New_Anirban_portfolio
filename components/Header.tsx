"use client";
import React, { createContext } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          url="https://www.youtube.com/anirbanpaira"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/anirbanpaira"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/anirban_paira"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/anirban-paira-3a1b531a9"
          fgColor="gray"
          bgColor="transparent"
        />
         <SocialIcon
          url="https://www.whatsapp.com/"
          fgColor="gray"
          bgColor="transparent"
        />
         <SocialIcon
          url="https://www.github.com/AnirbanPaira"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
