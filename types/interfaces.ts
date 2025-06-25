import { IconType } from "react-icons";
import { NumericString } from "./types";

export interface StaticPage {
  url: string;
  priority: NumericString;
  changefreq: "daily" | "weekly";
};

export interface BlogPost {
  id: string;
  lastModified: string;
};

export interface WPAuthUser {
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
};

export interface LoginResponse {
  success: boolean;
  message?: string;
};

export interface CareerPositions {
  image: string;
  title: string;
  description: string;
  link: URL;
  align: "start" | "end";
  dataAOS: "fade-left" | "fade-right";
};

export interface ConsultingLeads {
  image: string;
  name: string;
  title: string;
  specialty: string;
  socials: {
    icon: IconType;
    href: URL;
  }[];
};

export interface InternTestimonial {
  id: NumericString;
  image: URL;
  name: string;
  quote: string;
  title: string;
};