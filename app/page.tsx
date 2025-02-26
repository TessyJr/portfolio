"use client";

import Navbar from "@/components/ui/Navbar";

import Experience from "@/components/Experience";
import HomeHero from "@/components/HomeHero";
import Contact from "@/components/Contact";
import ProjectsHighlight from "@/components/ProjectsHighlight";
import ArticlesHighlight from "@/components/ArticlesHighlight";

const Home = () => {
  return (
    <main>
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
