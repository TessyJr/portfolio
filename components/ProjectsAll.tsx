"use client";

import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/data/projects";
import { TechStackTooltip } from "./ui/TechStackTooltip";
import Link from "next/link";
import Image from "next/image";
import {
  Java,
  Js,
  NextJs,
  ReactJs,
  SpringBoot,
  TailwindCss,
  VueJs,
} from "@/data/tech-stack-icons";

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
      { threshold: 1.0 }
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
            <Link
              href=""
              className="flex text-sm font-medium w-full pointer-events-none"
            >
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
            <Link
              href=""
              className="flex text-sm font-medium w-full pointer-events-none"
            >
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
