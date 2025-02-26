"use client";

import Link from "next/link";

import GradientBorderButton from "./ui/GradientBorderButton";
import ArticleCard from "./ui/ArticleCard";
import { articles } from "@/data/articles";

const ArticlesHighlight = () => {
  return (
    <section className="bg-black w-full flex flex-col px-[8%] md:px-[10%] lg:px-[12%] py-16 md:py-20 lg:py-24 gap-8 md:gap-10 lg:gap-12">
      <h1 className="heading text-white">
        Hightlights from My{" "}
        <span className="text-purple-300">Articles Collection</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full">
        {articles
          .slice()
          .reverse()
          .slice(0, 3)
          .map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
      </div>

      <div className="flex justify-center text-center">
        <Link href="/projects">
          <GradientBorderButton
            title="See all articles"
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

export default ArticlesHighlight;
