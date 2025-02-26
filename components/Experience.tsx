"use client";

import { experiences } from "@/data";

import GradientBorderButton from "./ui/GradientBorderButton";
import Link from "next/link";

const Experience = () => {
  return (
    <section className="bg-black w-full flex flex-col px-[8%] md:px-[10%] lg:px-[12%] py-16 md:py-20 lg:py-24 gap-8 md:gap-12 lg:gap-16">
      <h1 className="heading text-white">
        My <span className="text-purple-300">Work Experience</span>
      </h1>

      <ol className="relative border-s border-gray-700">
        {experiences.map((item) => (
          <li className="mb-10 ms-4" key={item.id}>
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              {item.duration}
            </time>
            <h3 className="text-lg font-bold text-white">
              {item.title}{" "}
              {item.company ? (
                <span className="font-light">at {item.company}</span>
              ) : (
                ""
              )}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              {item.desc}
            </p>
          </li>
        ))}
      </ol>

      <div className="flex justify-center text-center -mt-4 md:-mt-8 lg:-mt-12">
        <Link
          href="https://www.linkedin.com/in/christophernathanaeltessy/details/experience/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientBorderButton
            title="See all experience"
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            }
            position="right"
          />
        </Link>
      </div>
    </section>
  );
};

export default Experience;
