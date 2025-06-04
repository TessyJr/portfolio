import React from "react";
import Image from "next/image";
import Link from "next/link";

const ComingSoonProjectCard = ({
  projectName,
  projectType,
}: {
  projectName: string;
  projectType: string;
}) => {
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
          {projectType}{" "}
        </p>
        <h1 className="line-clamp-1 text-lg font-bold text-white md:text-xl lg:text-2xl">
          {projectName}
        </h1>
        <p className="line-clamp-2 text-sm font-light text-gray-400 lg:text-base lg:font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa iure
          consequatur qui eos quos corrupti, cupiditate architecto deleniti
          laborum enim inventore numquam aperiam molestias voluptatibus sed
          vero, velit aut neque.
        </p>
      </div>

      <div className="flex items-center justify-between self-start">
        <div className="flex items-center">
          <div className="group/tooltip relative flex h-10 w-10 items-center justify-center rounded-full border border-black/[.2] bg-slate-100 p-2">
            <div className="flex h-full w-full items-center justify-center font-bold text-indigo-500">
              ?
            </div>

            <span className="pointer-events-none absolute w-fit whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs text-black opacity-0 transition group-hover/tooltip:-translate-y-10 group-hover/tooltip:opacity-100">
              ???
            </span>
          </div>

          <div
            className="group/tooltip relative flex h-10 w-10 items-center justify-center rounded-full border border-black/[.2] bg-slate-100 p-2"
            style={{
              transform: `translateX(-${8 * 1}px)`,
            }}
          >
            <div className="flex h-full w-full items-center justify-center font-bold text-indigo-500">
              ?
            </div>

            <span className="pointer-events-none absolute w-fit whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs text-black opacity-0 transition group-hover/tooltip:-translate-y-10 group-hover/tooltip:opacity-100">
              ???
            </span>
          </div>

          <div
            className="group/tooltip relative flex h-10 w-10 items-center justify-center rounded-full border border-black/[.2] bg-slate-100 p-2"
            style={{
              transform: `translateX(-${8 * 2}px)`,
            }}
          >
            <div className="flex h-full w-full items-center justify-center font-bold text-indigo-500">
              ?
            </div>

            <span className="pointer-events-none absolute w-fit whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs text-black opacity-0 transition group-hover/tooltip:-translate-y-10 group-hover/tooltip:opacity-100">
              ???
            </span>
          </div>
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
  );
};

export default ComingSoonProjectCard;
