import { TechStack } from "./TechStack";

export type Project = {
  id: number;
  category: string;
  title: string;
  desc: string;
  role: string;
  img: string;
  techStack: TechStack[];
  screenshotLink: string;
  liveLink: string;
};
