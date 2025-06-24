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