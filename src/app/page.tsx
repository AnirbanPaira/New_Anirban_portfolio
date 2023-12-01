"use client";
import Head from "next/head";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";

import React, { createContext } from "react";

import Header from "../../components/Header";
export default function Home() {
  return (
    <div className="  font-bold text-white bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-hidden overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thu scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title />
      </Head>
      <Header />
      {/* //hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* //About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* //experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* //skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* //projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* //Contact me */}
      <section className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
