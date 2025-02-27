"use client";

import Navbar from "@/components/ui/Navbar";
import Highlight from "@/components/ui/Highlight";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import ArticlesAll from "@/components/ArticlesAll";
import ArticlesHero from "@/components/ArticlesHero";

const Articles = () => {
  return (
    <main className="bg-black">
      <Navbar />

      <ArticlesHero>
        <h1 className="relative z-10 mb-8 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text pb-1 text-center font-sans text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
          Articles Library
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
          Exploring{" "}
          <Highlight className="text-white">
            ideas, insights, and innovations
          </Highlight>
          —one thoughtful article after another
        </motion.h1>
      </ArticlesHero>

      <ArticlesAll />

      <Contact />
    </main>
  );
};

export default Articles;
