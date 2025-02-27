import { socialMedia } from "@/data/social-media";

import GradientBorderButton from "../ui/GradientBorderButton";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="relative bg-slate-950 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] px-[8%] pb-8 pt-16 md:pt-20 lg:pt-24">
      <div className="relative z-10 mx-auto flex max-w-screen-xl flex-col items-center gap-8 px-4 py-8 text-center lg:py-16">
        <h1 className="heading text-white lg:max-w-[45vw]">
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

      <div className="mt-16 flex flex-col items-center justify-between gap-4 text-white md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © {new Date().getFullYear()} Christopher Nathaael Tessy
        </p>

        <div className="flex items-center gap-4">
          {socialMedia.map((socialMedia, index) => (
            <Link
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white p-2 text-black backdrop-blur-lg backdrop-filter">
                {socialMedia.icon.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 z-0 h-80 w-full bg-gradient-to-b from-black to-transparent"></div>
    </section>
  );
};

export default Contact;
