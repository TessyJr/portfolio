import { TechStack } from "@/app/types/TechStack";
import {
  FaCss3Alt,
  FaElementor,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaravel,
  FaPhp,
  FaReact,
  FaSwift,
  FaUnity,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa6";
import {
  SiJquery,
  SiNextdotjs,
  SiTailwindcss,
  SiWoocommerce,
} from "react-icons/si";

export const Html: TechStack = {
  name: "HTML",
  icon: <FaHtml5 className="h-full w-full object-contain" />,
};

export const Css: TechStack = {
  name: "CSS",
  icon: <FaCss3Alt className="h-full w-full object-contain" />,
};

export const Js: TechStack = {
  name: "JavaScript",
  icon: <FaJs className="h-full w-full object-contain" />,
};

export const Swift: TechStack = {
  name: "Swift",
  icon: <FaSwift className="h-full w-full object-contain" />,
};

export const TailwindCss: TechStack = {
  name: "Tailwind CSS",
  icon: <SiTailwindcss className="h-full w-full object-contain" />,
};

export const JQuery: TechStack = {
  name: "jQuery",
  icon: <SiJquery className="h-full w-full object-contain" />,
};

export const WordPress: TechStack = {
  name: "WordPress",
  icon: <FaWordpress className="h-full w-full object-contain" />,
};

export const Elementor: TechStack = {
  name: "Elementor",
  icon: <FaElementor className="h-full w-full object-contain" />,
};

export const WooCommerce: TechStack = {
  name: "WooCommerce",
  icon: <SiWoocommerce className="h-full w-full object-contain" />,
};

export const Php: TechStack = {
  name: "PHP",
  icon: <FaPhp className="h-full w-full object-contain" />,
};

export const Laravel: TechStack = {
  name: "Laravel",
  icon: <FaLaravel className="h-full w-full object-contain" />,
};

export const Unity: TechStack = {
  name: "Unity",
  icon: <FaUnity className="h-full w-full object-contain" />,
};

export const ReactJs: TechStack = {
  name: "React.js",
  icon: <FaReact className="h-full w-full object-contain" />,
};

export const NextJs: TechStack = {
  name: "Next.js",
  icon: <SiNextdotjs className="h-full w-full object-contain" />,
};

export const VueJs: TechStack = {
  name: "Vue.js",
  icon: <FaVuejs className="h-full w-full object-contain" />,
};
