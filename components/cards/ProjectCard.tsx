import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/types/Project";
import { TechStackTooltip } from "../ui/TechStackTooltip";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
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
            src={project.img}
            alt={`Cover image of ${project.title} project`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
        <p className="max-w-80 text-xs uppercase tracking-widest text-blue-100">
          {project.category}
        </p>
        <h1 className="line-clamp-1 text-lg font-bold text-white md:text-xl lg:text-2xl">
          {project.title}
        </h1>
        <p className="line-clamp-2 text-sm font-light text-gray-400 lg:text-base lg:font-normal">
          {project.desc}
        </p>
      </div>

      <div className="flex items-center justify-between self-start">
        <div className="flex items-center">
          {project.techStack.map((techStack, index) => (
            <TechStackTooltip key={index} techStack={techStack} index={index} />
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-2">
        <Link
          href={`projects/${project.id}`}
          className="flex w-full text-sm font-medium"
        >
          <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-lg border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Project Details
          </button>
        </Link>

        {project.liveLink ? (
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full text-sm font-medium"
          >
            <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center gap-2 rounded-lg border border-emerald-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-emerald-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
              </span>
              Live Preview
            </button>
          </Link>
        ) : (
          <div className="flex w-full text-sm font-medium">
            <button className="pointer-events-none inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-slate-800 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-800"></span>
              </span>
              Live Preview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
