"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsAll = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef(null);

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
      { threshold: 1.0 },
    );

    const currentRef = loadMoreRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="flex w-full flex-col gap-4 bg-black px-[8%] pb-16 md:gap-8 md:px-[10%] md:pb-20 lg:gap-12 lg:px-[12%] lg:pb-24">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
        {projects
          .slice()
          .reverse()
          .slice(0, visibleCount)
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>

      {visibleCount < projects.length && (
        <div ref={loadMoreRef} className="h-10 w-full"></div>
      )}
    </section>
  );
};

export default ProjectsAll;
