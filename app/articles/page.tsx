"use client";

import { navItems } from "@/data";

import Navbar from "@/components/ui/Navbar";
import Contact from "@/components/Contact";

const Articles = () => {
  return (
    <main>
      <Navbar navItems={navItems} />

      <div className="min-h-screen">
        <h1>Articles</h1>
      </div>

      <Contact />
    </main>
  );
};

export default Articles;
