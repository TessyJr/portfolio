"use client";

import Navbar from "@/components/ui/Navbar";

import Experience from "@/components/home/Experience";
import HomeHero from "@/components/home/HomeHero";
import Contact from "@/components/sections/Contact";
import ProjectsHighlight from "@/components/home/ProjectsHighlight";
import ArticlesHighlight from "@/components/home/ArticlesHighlight";

const Home = () => {
  return (
    <main className="bg-black">
      <Navbar />

      <HomeHero />
      <Experience />
      <ProjectsHighlight />
      <ArticlesHighlight />
      <Contact />
    </main>
  );
};

export default Home;
