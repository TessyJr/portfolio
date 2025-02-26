"use client";

import { navItems } from "@/data";
import Image from "next/image";

import Navbar from "@/components/ui/Navbar";
import { useRouter } from "next/navigation";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { projects } from "@/data/projects";

const ProjectDetail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const project = projects.find((p) => p.id === Number(params.id));

  if (!project)
    return (
      <div className="text-white text-center mt-10">Project not found</div>
    );

  return (
    <main className="bg-black">
      <Navbar navItems={navItems} />

      <section className="min-h-screen flex flex-col px-[8%] md:px-[10%] lg:px-[12%] pt-32 gap-16 text-white">
        <button
          className="inline-flex px-7 h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-sm font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2 w-fit"
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
          className="relative flex items-center justify-center w-full max-w-[640px] aspect-[16/10] overflow-hidden group bg-cover rounded-lg border border-white/[0.2] group-hover:border-white/[0.4] transition duration-700 self-center"
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

        <div className="flex flex-col gap-2">
          <p className="uppercase tracking-widest text-blue-100 max-w-80">
            {project.category}
          </p>
          <h1 className="text-5xl font-bold">{project.title}</h1>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Description</h2>
          <p className="">{project.desc}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Role</h2>
          <p className="">{project.role}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Tech Stack</h2>
          <p className="">{project.desc}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Contributions</h2>
          <p className="">{project.desc}</p>
        </div>
      </section>

      <ShootingStars />
      <StarsBackground />
    </main>
  );
};

export default ProjectDetail;
