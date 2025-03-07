"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "@/data/projects";
import {
  Js,
  NextJs,
  ReactJs,
  TailwindCss,
  VueJs,
} from "@/data/tech-stack-icons";
import { TechStackTooltip } from "../ui/TechStackTooltip";

const ProjectsAll = () => {
  const [visibleCount, setVisibleCount] = useState(4);
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
        <div className="group flex w-full flex-col gap-6 rounded-xl border border-white/[0.2] bg-black p-5 transition duration-700 hover:border-white/[0.4] md:max-w-96 md:gap-7 lg:gap-8">
          <div
            className="group relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-white/[0.2] bg-cover transition duration-700 group-hover:border-white/[0.4]"
            style={{
              backgroundImage: "url('/projects/bg.png')",
              backgroundColor: "#13162D",
            }}
          >
            <div className="absolute left-4 top-6 h-full w-full rotate-2 overflow-hidden rounded-lg">
              <Image
                src="/coming-soon.png"
                alt="Coming soon"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
            <p className="max-w-80 text-xs uppercase tracking-widest text-blue-100">
              Web Development
            </p>
            <h1 className="line-clamp-1 text-lg font-bold text-white md:text-xl lg:text-2xl">
              Newtn
            </h1>
            <p className="line-clamp-2 text-sm font-light text-gray-400 lg:text-base lg:font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              iure consequatur qui eos quos corrupti, cupiditate architecto
              deleniti laborum enim inventore numquam aperiam molestias
              voluptatibus sed vero, velit aut neque.
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

          <div className="grid w-full grid-cols-2 gap-2">
            <Link
              href=""
              className="pointer-events-none flex w-full text-sm font-medium"
            >
              <button className="pointer-events-none inline-flex h-12 w-full items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Project Details
              </button>
            </Link>

            <div>
              <button className="pointer-events-none inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="flex h-3 w-3">
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-800"></span>
                </span>
                Live Preview
              </button>
            </div>
          </div>
        </div>

        <div className="group flex w-full flex-col gap-6 rounded-xl border border-white/[0.2] bg-black p-5 transition duration-700 hover:border-white/[0.4] md:max-w-96 md:gap-7 lg:gap-8">
          <div
            className="group relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-white/[0.2] bg-cover transition duration-700 group-hover:border-white/[0.4]"
            style={{
              backgroundImage: "url('/projects/bg.png')",
              backgroundColor: "#13162D",
            }}
          >
            <div className="absolute left-4 top-6 h-full w-full rotate-2 overflow-hidden rounded-lg">
              <Image
                src="/coming-soon.png"
                alt="Coming soon"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
            <p className="max-w-80 text-xs uppercase tracking-widest text-blue-100">
              Web Development
            </p>
            <h1 className="line-clamp-1 text-lg font-bold text-white md:text-xl lg:text-2xl">
              BestiePanti
            </h1>
            <p className="line-clamp-2 text-sm font-light text-gray-400 lg:text-base lg:font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              aliquam quis consectetur pariatur nostrum, dolores, qui odio ea
              delectus deleniti maiores suscipit voluptas non facere impedit
              architecto. Repellendus, facere esse?
            </p>
          </div>

          <div className="flex items-center justify-between self-start">
            <div className="flex items-center">
              <TechStackTooltip techStack={Js} index={0} />
              <TechStackTooltip techStack={TailwindCss} index={1} />
              <TechStackTooltip techStack={VueJs} index={2} />
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-2">
            <Link
              href=""
              className="pointer-events-none flex w-full text-sm font-medium"
            >
              <button className="pointer-events-none inline-flex h-12 w-full items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Project Details
              </button>
            </Link>

            <div>
              <button className="pointer-events-none inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="flex h-3 w-3">
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-800"></span>
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
