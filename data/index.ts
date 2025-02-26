import { Article } from "@/app/types/Article";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Articles", link: "/articles" },
];

export const experiences = [
  {
    id: 1,
    duration: "March 2024 - Present",
    title: "Junior iOS Developer",
    company: "Apple Developer Academy @ BINUS",
    desc: "Collaborated with a diverse team of developers, designers, and project managers to ideate and develop innovative iOS applications",
  },
  {
    id: 2,
    duration: "May 2023 - Present",
    title: "Front-End Developer",
    company: "WebCreativs",
    desc: "Worked collaboratively with a team of developers, designers, and project managers to create fully functional websites tailored to client needs.",
  },
  {
    id: 3,
    duration: "September 2022 - Present",
    title: "Freelance Web Developer",
    company: "",
    desc: "Independently developed fully functional websites tailored to client needs, managing all aspects of the project from design to deployment.",
  },
  {
    id: 4,
    duration: "February 2023 - February 2024",
    title: "Manager",
    company: "FAVE SOLUTION @ Bina Nusantara Computer Club",
    desc: "Lead a talented team of developers and designers to deliver exceptional web solutions, ensuring that our client-centric approach consistently meets or exceeds client expectations.",
  },
];

export const articles: Article[] = [
  {
    id: 1,
    date: "May 31, 2024",
    duration: "3 min read",
    title:
      "BitPals: Reinventing the Way to Remind Users to Stand and Walk with HealthKit in macOS",
    img: "/articles/bitpals.png",
    iconLists: ["/icons/article-platforms/linkedin.svg"],
    link: "https://www.linkedin.com/pulse/case-study-reinventing-way-remind-users-stand-walk-healthkit-tessy-axnmc/?trackingId=E6OGijyyrpaZ%2F63qnU4%2BNg%3D%3D",
  },
  {
    id: 2,
    date: "July 3, 2024",
    duration: "5 min read",
    title: "TypeCaster: My Experience in Making a Challenging Action RPG",
    img: "/articles/typecaster.png",
    iconLists: ["/icons/article-platforms/linkedin.svg"],
    link: "https://www.linkedin.com/pulse/typecaster-my-experience-making-challenging-action-rpg-tessy-pfa3c/?trackingId=pur2YPx3Q8%2BnRz8vq%2BIqGw%3D%3D",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/icons/socials/github.svg",
    link: "https://github.com/TessyJr",
  },
  {
    id: 2,
    img: "/icons/socials/linkedin.svg",
    link: "https://www.linkedin.com/in/christophernathanaeltessy/",
  },
  {
    id: 3,
    img: "/icons/socials/instagram.svg",
    link: "https://www.instagram.com/christophertessy_",
  },
];
