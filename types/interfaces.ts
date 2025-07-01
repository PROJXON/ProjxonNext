import { IconType } from "react-icons";
import { NumericString, WPStatus } from "./types";

export interface StaticPage {
  url: string;
  priority: NumericString;
  changefreq: "daily" | "weekly";
};

export interface SitemapBlogPost {
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
  image: string;
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

export interface EmailResponse {
  message: string;
};

export interface EmailFormFields {
  user_name: string;
  user_email: string;
  message: string;
  user_phone?: string;
  organization?: string;
  services_needed?: string;
};

export interface RouteParams {
  params: IdParams;
};

export interface IdParams {
  id: string;
};

export interface WPImage {
  source_url: string;
};

export interface ImageUploadProps {
  onFileSelect: (file: File) => void;
};

export interface ErrorPageProps {
  error: Error & { digest?: string; };
  reset: () => void;
};

export interface HeroProps {
  title: string;
  subtitle?: string;
  paragraph?: string;
  backgroundClass?: `${string}-hero`;
};

export interface WPBlogPost {
  author: number;
  categories: number[];
  comment_status: WPStatus;
  content: WPPostContent;
  date: Date;
  date_gmt: Date;
  excerpt: WPPostContent;
  featured_media: number;
  format: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio";
  guid: WPPostContent;
  id: number;
  link: URL;
  meta: Record<string, string>;
  modified: Date;
  modified_gmt: Date;
  ping_status: WPStatus;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  template: string;
  title: WPPostContent;
  [prop: string]: any;
};

interface WPPostContent {
  protected?: boolean;
  rendered: string;
};

export interface UploadResponse {
  url: string;
};

export interface CustomButtonProps {
  buttonText: string;
  link: string;
  buttonStyle: string;
  delayTime?: number;
  isExternal?: boolean;
  isAnimated?: boolean;
};

export interface Value {
  icon: IconType;
  title: string;
  description: string;
}

export interface ChooseUsReasons extends Value {
  stat: NumericString;
  statSuffix: "+" | "%";
  statDescription: string;
};