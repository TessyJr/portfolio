import Image from "next/image";

import { socialMedia } from "@/data/social-media";

import GradientBorderButton from "./ui/GradientBorderButton";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="bg-slate-950 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] relative px-[8%] pt-16 md:pt-20 lg:pt-24  pb-8">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative flex flex-col items-center gap-8">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Ready to Take <span className="text-purple-300">Your</span> Digital
          Presence to the Next Level?
        </h1>

        <p className="text-center text-white">
          Reach out to me today and let&#39;s discuss how I can help you achieve
          your goals.
        </p>

        <a href="mailto:christopher.nathanael1217@gmail.com">
          <GradientBorderButton
            title="Let's get in touch"
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
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center text-white gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Christopher Nathanael Tessy
        </p>

        <div className="flex items-center gap-4">
          {socialMedia.map((socialMedia, index) => (
            <Link
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-white rounded-lg text-black">
                {socialMedia.icon.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b to-transparent from-black w-full h-80 absolute top-0 left-0 z-0"></div>
    </section>
  );
};

export default Contact;
