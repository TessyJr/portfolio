import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkedIn } from "@/data/social-icons";
import { Article } from "@/app/types/Article";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="group flex w-full flex-col gap-6 rounded-xl border border-white/[0.2] bg-black p-5 transition duration-700 hover:border-white/[0.4] md:max-w-96 md:gap-7 lg:gap-8">
      <div
        className="group relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-white/[0.2] bg-cover transition duration-700 group-hover:border-white/[0.4]"
        style={{
          backgroundImage: "url('/projects/bg.png')",
          backgroundColor: "#13162D",
        }}
      >
        <div className="absolute left-4 top-6 h-full w-full rotate-2 overflow-hidden rounded-lg">
          <Image
            src={article.img}
            alt={`Cover image of ${article.title} article`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
        <p className="text-xs uppercase tracking-widest text-blue-100">
          {article.date} • {article.duration}
        </p>
        <h1 className="line-clamp-2 text-lg font-bold text-white md:text-xl lg:text-2xl">
          {article.title}
        </h1>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[.2] bg-slate-100 p-2">
            <div className="h-full w-full text-indigo-500">{LinkedIn.icon}</div>
          </div>
        </div>

        <Link
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-sm font-medium"
        >
          <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-lg border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
