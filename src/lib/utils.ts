const IMAHE_BASE_URL = "";
const FALLBACK_POSTER = "";

export function getPosterUrl(path: string | null): string {
    if (!path) return FALLBACK_POSTER;
    return `${IMAHE_BASE_URL}${path}`;
}