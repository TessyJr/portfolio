"use client";

import Link from "next/link";

import GradientBorderButton from "../ui/GradientBorderButton";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsHighlight = () => {
  return (
    <section className="flex w-full flex-col gap-8 bg-black px-[8%] py-16 md:gap-10 md:px-[10%] md:py-20 lg:gap-12 lg:px-[12%] lg:py-24">
      <h1 className="heading text-white">
        A Small Selection of{" "}
        <span className="text-purple-300">Recent Projects</span>
      </h1>

      <div className="flex w-full flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
        {projects
          .slice()
          .reverse()
          .slice(0, 3)
          .map((project) => {
            return <ProjectCard key={project.id} project={project} />;
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
