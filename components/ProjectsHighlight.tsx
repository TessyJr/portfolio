"use client";

import Link from "next/link";
import Image from "next/image";

import GradientBorderButton from "./ui/GradientBorderButton";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/data/projects";
import { TechStackTooltip } from "./ui/TechStackTooltip";
import {
  Java,
  Js,
  NextJs,
  ReactJs,
  SpringBoot,
  TailwindCss,
  VueJs,
} from "@/data/tech-stack-icons";

const ProjectsHighlight = () => {
  return (
    <section className="bg-black w-full flex flex-col px-[8%] md:px-[10%] lg:px-[12%] py-16 md:py-20 lg:py-24 gap-8 md:gap-10 lg:gap-12">
      <h1 className="heading text-white">
        A Small Selection of{" "}
        <span className="text-purple-300">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full">
        <div className="group p-5 w-full md:max-w-96 flex flex-col gap-6 md:gap-7 lg:gap-8 rounded-xl bg-black border border-white/[0.2] hover:border-white/[0.4] transition duration-700">
          <div
            className="relative flex items-center justify-center w-full aspect-[16/10] overflow-hidden group bg-cover rounded-lg border border-white/[0.2] group-hover:border-white/[0.4] transition duration-700"
            style={{
              backgroundImage: "url('/projects/bg.png')",
              backgroundColor: "#13162D",
            }}
          >
            <div className="absolute overflow-hidden w-full h-full rounded-lg rotate-2 top-6 left-4">
              <Image
                src="/coming-soon.png"
                alt="cover"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
            <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
              Web Development
            </p>
            <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1 text-white">
              Newtn
            </h1>
            <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2 text-gray-400">
              COMING SOON
            </p>
          </div>

          <div className="flex items-center justify-between self-start">
            <div className="flex items-center">
              <TechStackTooltip techStack={Js} index={0} />
              <TechStackTooltip techStack={TailwindCss} index={1} />
              <TechStackTooltip techStack={ReactJs} index={2} />
              <TechStackTooltip techStack={NextJs} index={3} />
            </div>
          </div>

          <div className="gap-2 w-full grid grid-cols-2">
            <Link href="" className="flex text-sm font-medium w-full">
              <button className="inline-flex px-6 h-12 items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full pointer-events-none">
                Project Details
              </button>
            </Link>

            <div>
              <button className="inline-flex px-6 h-12 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full pointer-events-none">
                <span className="flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-800"></span>
                </span>
                Live Preview
              </button>
            </div>
          </div>
        </div>

        <div className="group p-5 w-full md:max-w-96 flex flex-col gap-6 md:gap-7 lg:gap-8 rounded-xl bg-black border border-white/[0.2] hover:border-white/[0.4] transition duration-700">
          <div
            className="relative flex items-center justify-center w-full aspect-[16/10] overflow-hidden group bg-cover rounded-lg border border-white/[0.2] group-hover:border-white/[0.4] transition duration-700"
            style={{
              backgroundImage: "url('/projects/bg.png')",
              backgroundColor: "#13162D",
            }}
          >
            <div className="absolute overflow-hidden w-full h-full rounded-lg rotate-2 top-6 left-4">
              <Image
                src="/coming-soon.png"
                alt="cover"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
            <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
              Web Development
            </p>
            <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1 text-white">
              BestiePanti
            </h1>
            <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2 text-gray-400">
              COMING SOON
            </p>
          </div>

          <div className="flex items-center justify-between self-start">
            <div className="flex items-center">
              <TechStackTooltip techStack={Js} index={0} />
              <TechStackTooltip techStack={Java} index={1} />
              <TechStackTooltip techStack={TailwindCss} index={2} />
              <TechStackTooltip techStack={VueJs} index={3} />
              <TechStackTooltip techStack={SpringBoot} index={4} />
            </div>
          </div>

          <div className="gap-2 w-full grid grid-cols-2">
            <Link href="" className="flex text-sm font-medium w-full">
              <button className="inline-flex px-6 h-12 items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full pointer-events-none">
                Project Details
              </button>
            </Link>

            <div>
              <button className="inline-flex px-6 h-12 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full pointer-events-none">
                <span className="flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-800"></span>
                </span>
                Live Preview
              </button>
            </div>
          </div>
        </div>

        {projects
          .slice()
          .reverse()
          .slice(0, 1)
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
