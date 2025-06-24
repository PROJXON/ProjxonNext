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