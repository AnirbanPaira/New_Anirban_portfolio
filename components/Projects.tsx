import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thu scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen relative top-[50px]"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzO-mVbTLfydeqdGNHIui3JqxaitpjPKIZw&usqp=CAU"
              alt=""
              className="mt-30"
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl ">
              <h4 className="lg:text-4xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study of {project} of {projects.length} :
                </span>{" "}
                UPS clone
              </h4>
              <p className="text-base overflow-y-scroll h-24 no-scrollbar text-center md:text-left scrollbar scrollbar-track-gray-400/20 scrollbar-thu scrollbar-thumb-[#F7AB0A]/80 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, repellat quas eius tempore rem illo distinctio
                natus unde est, enim, hic architecto deleniti numquam aut. Iure
                porro laborum sit dignissimos, sed ad.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A] opacity-10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
