import { Social } from "@/app/types/Social";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export const LinkedIn: Social = {
  name: "LinkedIn",
  icon: <FaLinkedin className="h-full w-full object-contain" />,
};

export const Instagram: Social = {
  name: "Instagram",
  icon: <FaInstagram className="h-full w-full object-contain" />,
};

export const GitHub: Social = {
  name: "GitHub",
  icon: <FaGithub className="h-full w-full object-contain" />,
};
