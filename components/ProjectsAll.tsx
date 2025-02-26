"use client";

import React, { useState } from "react";

import { projects } from "@/data";
import GradientBorderButton from "./ui/GradientBorderButton";
import ProjectWebCard from "./ui/ProjectWebCard";
import ProjectIOSCard from "./ui/ProjectIOSCard";

const ProjectsAll = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <section className="bg-black w-full flex flex-col px-[8%] md:px-[10%] lg:px-[12%] pb-16 md:pb-20 lg:pb-24 gap-4 md:gap-8 lg:gap-12">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full">
        {projects
          .slice()
          .reverse()
          .slice(0, 3)
          .map((project) => {
            switch (project.category) {
              case "web":
                return <ProjectWebCard key={project.id} project={project} />;
              case "ios":
                return <ProjectIOSCard key={project.id} project={project} />;
              default:
                return null;
            }
          })}
      </div>

      <div className="flex justify-center text-center mt-8 md:mt-6 lg:mt-4">
        <div>
          <GradientBorderButton
            handleClick={handleLoadMore}
            title="Show more"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            }
            position="right"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsAll;
