import React from "react";
import { motion } from "framer-motion";
import internal from "stream";

type Props = {
  directionLeft?: boolean;
  images?: any;
  percentage?:any;
};

function getRandomColor() {
  const colors = ["#FF69B4", "#33CC33", "#6666CC", "#CC3333", "#CCCC33"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function Skill({ directionLeft, images,percentage }: Props) {
  const borderColor = getRandomColor();

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={images}
        style={{
          borderColor: borderColor,
          boxShadow: `0 0 10px ${borderColor}, 0 0 20px ${borderColor}`,
        }}
        className="rounded-full border-4 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter 
        group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md-w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;