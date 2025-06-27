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
  align: "start" | "end";
  dataAOS: "fade-left" | "fade-right";
};

export interface ConsultingLeads {
  image: string;
  name: string;
  title: string;
  specialty: string;
  socials: ReactIconLink[];
};

export interface InternTestimonial {
  id?: NumericString;
  image: URL;
  name: string;
  quote: string;
  title: string;
};

interface ReactIconLink {
  icon: IconType;
  href: URL;
};

export interface SocialIcon extends ReactIconLink {
  ariaLabel: string;
  newTab: boolean;
};

export interface FooterLink {
  heading: string;
  href: string;
  links: {
    id: string;
    text: string;
  }[];
};

export interface Partnership {
  title: string;
  text: string;
  dataAOSDelay: NumericString;
};

export interface EmailResponse { message: string; };

export interface EmailFormFields {
  user_name: string;
  user_email: string;
  message: string;
  user_phone?: string;
  organization?: string;
  services_needed?: string;
};

export interface RouteParams {
  params: {
    id: string;
  };
};

export interface WPImage {
  source_url: string;
};

export interface ImageUploadProps {
  onFileSelect: (file: File) => void;
};