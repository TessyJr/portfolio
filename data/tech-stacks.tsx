import { TechStack } from "@/app/types/TechStack";
import {
  FaCss3Alt,
  FaElementor,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaPhp,
  FaSwift,
  FaWordpress,
} from "react-icons/fa6";
import { SiJquery, SiTailwindcss, SiWoocommerce } from "react-icons/si";

export const Html: TechStack = {
  id: 1,
  name: "HTML",
  icon: <FaHtml5 className="h-full w-full object-contain" />,
};

export const Css: TechStack = {
  id: 2,
  name: "CSS",
  icon: <FaCss3Alt className="h-full w-full object-contain" />,
};

export const Js: TechStack = {
  id: 3,
  name: "JavaScript",
  icon: <FaJs className="h-full w-full object-contain" />,
};

export const Swift: TechStack = {
  id: 4,
  name: "Swift",
  icon: <FaSwift className="h-full w-full object-contain" />,
};

export const TailwindCss: TechStack = {
  id: 5,
  name: "Tailwind CSS",
  icon: <SiTailwindcss className="h-full w-full object-contain" />,
};

export const JQuery: TechStack = {
  id: 6,
  name: "jQuery",
  icon: <SiJquery className="h-full w-full object-contain" />,
};

export const WordPress: TechStack = {
  id: 7,
  name: "WordPress",
  icon: <FaWordpress className="h-full w-full object-contain" />,
};

export const Elementor: TechStack = {
  id: 8,
  name: "Elementor",
  icon: <FaElementor className="h-full w-full object-contain" />,
};

export const WooCommerce: TechStack = {
  id: 9,
  name: "WooCommerce",
  icon: <SiWoocommerce className="h-full w-full object-contain" />,
};

export const Php: TechStack = {
  id: 10,
  name: "PHP",
  icon: <FaPhp className="h-full w-full object-contain" />,
};

export const Laravel: TechStack = {
  id: 11,
  name: "Laravel",
  icon: <FaLaravel className="h-full w-full object-contain" />,
};
