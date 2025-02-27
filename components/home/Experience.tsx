"use client";

import { experiences } from "@/data/experiences";
import GradientBorderButton from "../ui/GradientBorderButton";
import Link from "next/link";

const Experience = () => {
  const reversedExperiences = [...experiences].reverse();

  return (
    <section className="flex w-full flex-col gap-8 bg-black px-[8%] py-16 md:gap-12 md:px-[10%] md:py-20 lg:gap-16 lg:px-[12%] lg:py-24">
      <h1 className="heading text-white">
        My <span className="text-purple-300">Work Experience</span>
      </h1>

      <ol className="relative border-s border-gray-700">
        {reversedExperiences.map((item) => (
          <li className="mb-10 ms-4" key={item.id}>
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-900 bg-gray-700"></div>

            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              {item.duration}
            </time>

            <h3 className="text-xl font-bold text-white">
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

      <div className="-mt-4 flex justify-center text-center md:-mt-8 lg:-mt-12">
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
