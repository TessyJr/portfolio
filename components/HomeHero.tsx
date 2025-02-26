"use client";

import Image from "next/image";

import Highlight from "@/components/ui/Highlight";
import GradientBorderButton from "./ui/GradientBorderButton";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <section className="min-h-screen w-full bg-slate-950 bg-grid-white/[0.1] relative flex items-center justify-center px-[8%] md:px-[10%] lg:px-[12%] pt-32">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-10 w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
          <Image
            src="/me.JPG"
            alt="Picture of Christopher"
            width={256}
            height={0}
            className="w-48 md:w-56 lg:w-64 rounded-lg"
          />

          <p className="uppercase tracking-widest text-sm text-blue-100 -mb-2">
            Frontend Web Developer
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-relaxed">
            Christopher Nathanael Tessy
          </h1>
        </div>

        <hr />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-normal md:leading-relaxed">
            Crafting{" "}
            <Highlight className="text-white leading-normal md:leading-relaxed">
              Digital Dreams into Reality
            </Highlight>
          </h1>

          <p className="text-sm md:text-base lg:text-xl text-neutral-200">
            Hey there! I&apos;m a developer specializing in{" "}
            <span className="font-bold">frontend web development</span>, with
            experience in{" "}
            <span className="font-bold">unity game development</span>. Based in
            Jakarta, Indonesia. Explore my journey through code and innovation.
          </p>

          <div className="w-fit mt-4">
            <Link
              href="/cv.pdf"
              download="Christopher Nathaael Tessy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
