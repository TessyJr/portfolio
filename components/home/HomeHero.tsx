"use client";

import Image from "next/image";

import Highlight from "@/components/ui/Highlight";
import GradientBorderButton from "../ui/GradientBorderButton";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-slate-950 px-[8%] pt-32 bg-grid-white/[0.1] md:px-[10%] lg:px-[12%]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-10 flex w-full flex-col gap-4 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
          <div className="relative h-48 w-48 overflow-hidden rounded-lg md:h-56 md:w-56 lg:h-64 lg:w-64">
            <Image
              src="/me.jpg"
              alt="Picture of Christophe Nathanael Tessy"
              fill
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
              className="object-cover"
            />
          </div>

          <p className="-mb-2 text-sm uppercase tracking-widest text-blue-100">
            Frontend Web Developer
          </p>

          <h1 className="text-4xl font-bold leading-snug text-white md:text-5xl md:leading-relaxed lg:text-6xl">
            Christopher Nathanael Tessy
          </h1>
        </div>

        <hr />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-normal text-white md:text-4xl md:leading-relaxed lg:text-5xl">
            Crafting{" "}
            <Highlight className="leading-normal text-white md:leading-relaxed">
              Digital Dreams into Reality
            </Highlight>
          </h1>

          <p className="text-sm text-neutral-200 md:text-base lg:text-xl">
            Hey there! I&apos;m a developer specializing in{" "}
            <span className="font-bold">frontend web development</span>, with
            experience in{" "}
            <span className="font-bold">unity game development</span>. Based in
            Jakarta, Indonesia. Explore my journey through code and innovation.
          </p>

          <div className="mt-4 w-fit">
            <a href="/cv.pdf" download="Christopher_Nathanael_Tessy_CV.pdf">
              <GradientBorderButton
                title="Download CV"
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
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                }
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
