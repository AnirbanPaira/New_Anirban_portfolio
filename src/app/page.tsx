"use client";
import Head from "next/head";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import React, { createContext } from "react";

import Header from "../../components/Header";
export default function Home() {
  return (
    <main>
      <div className="text-3xl font-bold  text-white bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-scroll z-0">
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
        {/* //projects */}
        {/* //Contact me */}
      </div>
    </main>
  );
}
