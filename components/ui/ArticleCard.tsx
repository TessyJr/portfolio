import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkedIn } from "@/data/social-icons";
import { Article } from "@/app/types/Article";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="group p-5 w-full md:max-w-96 flex flex-col gap-6 md:gap-7 lg:gap-8 rounded-xl bg-black border border-white/[0.2] hover:border-white/[0.4] transition duration-700">
      <div
        className="relative flex items-center justify-center w-full aspect-[16/10] overflow-hidden group bg-cover rounded-lg border border-white/[0.2] group-hover:border-white/[0.4] transition duration-700"
        style={{
          backgroundImage: "url('/projects/bg.png')",
          backgroundColor: "#13162D",
        }}
      >
        <div className="absolute overflow-hidden w-full h-full rounded-lg rotate-2 top-6 left-4">
          <Image src={article.img} alt="cover" fill className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
        <p className="uppercase tracking-widest text-xs text-blue-100">
          {article.date} • {article.duration}
        </p>
        <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-2 text-white">
          {article.title}
        </h1>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="border border-black/[.2] rounded-full bg-slate-100 w-10 h-10 flex justify-center items-center p-2">
            <div className="w-full h-full text-indigo-500">{LinkedIn.icon}</div>
          </div>
        </div>

        <Link
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-sm font-medium"
        >
          <button className="inline-flex px-7 h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
