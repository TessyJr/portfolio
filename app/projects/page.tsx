"use client";

import Navbar from "@/components/ui/Navbar";
import Highlight from "@/components/ui/Highlight";

import ProjectsAll from "@/components/ProjectsAll";
import Contact from "@/components/Contact";
import ProjectsHero from "@/components/ProjectsHero";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <main>
      <Navbar />

      <ProjectsHero>
        <h1 className="relative z-10 text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-8 pb-1">
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
          className="px-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-5xl leading-relaxed md:leading-normal lg:leading-snug text-center mx-auto "
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
