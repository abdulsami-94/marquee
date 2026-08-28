import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const FALLBACK_POSTER = "/no-poster.png";

export function getPosterUrl(path: string | null): string {
  if (!path) return FALLBACK_POSTER;
  return `${IMAGE_BASE_URL}${path}`;
}