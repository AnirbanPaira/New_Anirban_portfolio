import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["HI,The Name is Anirban", "Developer", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="data:image/jpeg;base64,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"
        alt="profile"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[18px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7BBAA" />
        </h1>
        <div className="pt-5 ">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
