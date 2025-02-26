"use client";

import Link from "next/link";

import { projects } from "@/data";

import GradientBorderButton from "./ui/GradientBorderButton";
import ProjectWebCard from "./ui/ProjectWebCard";
import ProjectIOSCard from "./ui/ProjectIOSCard";

const ProjectsHighlight = () => {
  return (
    <section className="bg-black w-full flex flex-col px-[8%] md:px-[10%] lg:px-[12%] py-16 md:py-20 lg:py-24 gap-8 md:gap-10 lg:gap-12">
      <h1 className="heading text-white">
        A Small Selection of{" "}
        <span className="text-purple-300">Recent Projects</span>
      </h1>

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

      <div className="flex justify-center text-center">
        <Link href="/projects">
          <GradientBorderButton
            title="See all projects"
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            }
            position="right"
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsHighlight;
