"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsAll = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef(null); // Ref for detecting the bottom

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 1.0 } // Trigger when fully in view
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-black w-full flex flex-col px-[8%] md:px-[10%] lg:px-[12%] pb-16 md:pb-20 lg:pb-24 gap-4 md:gap-8 lg:gap-12">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full">
        {projects
          .slice()
          .reverse()
          .slice(0, visibleCount)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>

      {/* Invisible div to trigger loading more when in view */}
      {visibleCount < projects.length && (
        <div ref={loadMoreRef} className="h-10 w-full"></div>
      )}
    </section>
  );
};

export default ProjectsAll;
