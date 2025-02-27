"use client";

import Image from "next/image";

import Navbar from "@/components/ui/Navbar";
import { useRouter } from "next/navigation";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { projects } from "@/data/projects";
import { TechStackTooltip } from "@/components/ui/TechStackTooltip";
import Contact from "@/components/Contact";
import Link from "next/link";
import { use } from "react";

export default function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const router = useRouter();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="mt-10 text-center text-white">Project not found</div>
    );
  }

  return (
    <main className="bg-black">
      <Navbar />

      <section className="flex min-h-screen flex-col gap-16 px-[8%] py-32 text-white md:px-[10%] lg:px-[12%]">
        <button
          className="inline-flex h-12 w-fit animate-shimmer items-center justify-center gap-2 rounded-lg border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 text-sm font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => router.back()}
        >
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Go back
        </button>

        <div
          className="group relative flex aspect-[16/10] w-full max-w-[800px] items-center justify-center self-center overflow-hidden rounded-lg border border-white/[0.2] bg-cover transition duration-700 group-hover:border-white/[0.4]"
          style={{
            backgroundImage: "url('/projects/bg.png')",
            backgroundColor: "#13162D",
          }}
        >
          <div className="absolute left-6 top-12 h-full w-full rotate-2 overflow-hidden rounded-lg">
            <Image
              src={project.img}
              alt="cover"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="max-w-80 uppercase tracking-widest text-blue-100">
            {project.category}
          </p>
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="">{project.desc}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>

          <div className="flex items-center">
            {project.techStack.map((techStack, index) => (
              <TechStackTooltip
                key={index}
                techStack={techStack}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Role</h2>
          <p className="">{project.role}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            Screenshots and Live Preview
          </h2>

          <Link
            href={project.screenshotLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full text-sm font-medium"
          >
            <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-lg border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Screenshots
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
            <div>
              <button className="pointer-events-none inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="flex h-3 w-3">
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-800"></span>
                </span>
                Live Preview
              </button>
            </div>
          )}

          <p className="">
            *Please note that the live preview for web development projects may
            be subject to changes or updates by the client.
          </p>
        </div>
      </section>

      <ShootingStars />
      <StarsBackground />

      <Contact />
    </main>
  );
}

// export default ProjectDetail;
