"use client";

import Image from "next/image";

import Highlight from "@/components/ui/Highlight";

export const HomeHero = () => {
  return (
    <section className="min-h-screen w-full bg-slate-950 bg-grid-white/[0.1] relative flex items-center justify-center px-[8%] md:px-[10%] lg:px-[12%]">
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
            Hey there! I&apos;m Christopher Nathanael Tessy—a developer
            specializing in{" "}
            <span className="font-bold">frontend web development</span>, with
            experience in{" "}
            <span className="font-bold">iOS and game development</span>. Based
            in Jakarta, Indonesia. Explore my journey through code and
            innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
