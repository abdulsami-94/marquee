const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const FALLBACK_POSTER = "/no-poster.png";

export function getPosterUrl(path: string | null): string {
  if (!path) return FALLBACK_POSTER;
  return `${IMAGE_BASE_URL}${path}`;
}