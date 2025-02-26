import React from "react";
import Image from "next/image";

const ProjectWebCard = ({ project }: { project: Project }) => {
  return (
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
              src={project.img}
              alt="cover"
              fill
              className="object-cover"
            />
          </div>
      </div>

      <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
        <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
          {project.type}
        </p>
        <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1 text-white">
          {project.title}
        </h1>
        <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2 text-gray-400">
          {project.des}
        </p>
      </div>

      <div className="flex items-center justify-between self-start">
        <div className="flex items-center">
          {project.iconLists.map((icon, index) => (
            <div
              key={index}
              className="border border-black/[.2] rounded-full bg-slate-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${8 * index}px)`,
              }}
            >
              <Image src={icon} alt="icon" fill className="p-2 object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between gap-2 w-full">
        <a
          href={project.screenshotLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-sm font-medium  w-full"
        >
          <button className="inline-flex px-6 md:px-7 lg:px-8 h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full">
            Screenshots
          </button>
        </a>

        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-sm font-medium  w-full"
        >
          <button className="inline-flex px-6 md:px-7 lg:px-8 h-12 animate-shimmer items-center justify-center gap-2 rounded-lg border border-emerald-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-emerald-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50 w-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            Live Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectWebCard;
