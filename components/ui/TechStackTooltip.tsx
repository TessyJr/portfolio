import { TechStack } from "@/app/types/TechStack";

export const TechStackTooltip = ({
  techStack,
  index,
}: {
  techStack: TechStack;
  index: number;
}) => {
  return (
    <div
      className="p-2 border border-black/[.2] rounded-full bg-slate-100 w-10 h-10 flex justify-center items-center group/tooltip relative"
      style={{
        transform: `translateX(-${8 * index}px)`,
      }}
    >
      <div className="w-full h-full text-indigo-500">{techStack.icon}</div>

      <span className="absolute bg-white py-1 px-2 rounded-md text-xs w-fit opacity-0 group-hover/tooltip:-translate-y-10 group-hover/tooltip:opacity-100 transition pointer-events-none whitespace-nowrap text-black">
        {techStack.name}
      </span>
    </div>
  );
};
