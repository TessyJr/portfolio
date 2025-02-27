"use client";

import Navbar from "@/components/ui/Navbar";
import Highlight from "@/components/ui/Highlight";

import ProjectsAll from "@/components/projects/ProjectsAll";
import Contact from "@/components/sections/Contact";
import ProjectsHero from "@/components/projects/ProjectsHero";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <main className="bg-black">
      <Navbar />

      <ProjectsHero>
        <h1 className="relative z-10 mb-8 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text pb-1 text-center font-sans text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
          Project Gallery
        </h1>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto max-w-5xl px-4 text-center text-2xl font-bold leading-relaxed text-white md:text-3xl md:leading-normal lg:text-4xl lg:leading-snug"
        >
          Every project is a story of passion, perseverance, and the pursuit of{" "}
          <Highlight className="text-white">digital excellence</Highlight>
        </motion.h1>
      </ProjectsHero>

      <ProjectsAll />

      <Contact />
    </main>
  );
};

export default Projects;
