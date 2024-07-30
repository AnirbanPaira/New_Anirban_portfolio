import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-shrink-0 w-1/2 h-auto md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[500px] xl:h-[500px] object-cover rounded-full md:rounded-lg relative top-16 md:top-0"
        src='data:image/jpeg;base64,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'
      />

      <div className="flex flex-col justify-center  px-4 space-y-6 md:space-y-10 mt-0 lg:mt-0">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold pt-0 md:pt-10 text-center">
          Here is a
          <span
            className="underline"
            style={{ color: "#F7AB0A", opacity: "50" }}
          >
            {" "}
            little
          </span>{" "}
          background
        </h4>

        <div className="container scrollbar-hide">
          <p className="text-sm md:text-base lg:text-lg overflow-y-scroll text-justify h-[260px]">
            Hi, My name is Anirban, and I am an Associate Developer with two years of professional experience in the IT industry, specializing in 
            <span
            className="underline"
            style={{ color: "#F7AB0A", opacity: "50" }}
          >
            MERN (MongoDB, Express.js, React, Node.js) </span>
            development. My journey began with a robust academic foundation, leading to practical experience and continuous learning. 
            I am passionate about crafting scalable web applications and exploring cutting-edge technologies like 
            <span
            className="underline"
            style={{ color: "#F7AB0A", opacity: "50" }}
          > blockchain</span>. I hold a B.Tech in Computer Science and Engineering, where I mastered core computer science principles, including algorithms, data structures, and software engineering methodologies. 
          In my professional role, I excel in both front-end and back-end development. I am proficient in 
          <span
            className="underline"
            style={{ color: "#F7AB0A", opacity: "50" }}
          > HTML, CSS, JavaScript, and React, creating responsive and user-friendly interfaces</span>. On the server side, I have extensive experience with  <span
          className="underline"
          style={{ color: "#F7AB0A", opacity: "50" }}
        > Node.js and Express.js, building RESTful APIs and handling authentication and authorization</span>. I am also skilled in 
         <span
            className="underline"
            style={{ color: "#F7AB0A", opacity: "50" }}
          > MongoDB</span>, designing efficient database schemas, and optimizing queries. I am proficient in using <span
          className="underline"
          style={{ color: "#F7AB0A", opacity: "50" }}
        > Git</span> for version control, ensuring seamless collaboration and code management. Looking ahead, I am eager to delve into blockchain development. I am currently learning  <span
        className="underline"
        style={{ color: "#F7AB0A", opacity: "50" }}
      > Solidity </span>for smart contract development on the Ethereum blockchain, aiming to become proficient in blockchain full-stack development. I am excited about contributing to decentralized applications (DApps) and exploring the vast potential of blockchain technology. My career goals revolve around continuous learning, innovation, and making a meaningful impact in the tech industry.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
