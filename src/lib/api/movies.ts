import type { Movie } from "../../../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

async function fetchTMDB(endpoint: string, revalidate = 3600, retries = 2): Promise<any> {
    const apiKey = process.env.TMDB_API_KEY;
    if (!apiKey) {
        console.warn("TMDB_API_KEY is not defined in environment variables.");
    }

    const separator = endpoint.includes("?") ? "&" : "?";
    const url = `${BASE_URL}${endpoint}${separator}api_key=${apiKey}`;

    let lastError: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000);

            const res = await fetch(url, {
                next: { revalidate },
                signal: controller.signal,
            });
            clearTimeout(timeoutId);

            if (!res.ok) {
                throw new Error(`TMDB request failed: ${res.status} ${res.statusText}`);
            }

            return await res.json();
        } catch (err: any) {
            lastError = err;
            const isNetworkError =
                err?.name === "AbortError" ||
                err?.code === "ECONNRESET" ||
                err?.code === "UND_ERR_CONNECT_TIMEOUT" ||
                err?.message?.includes("fetch failed");

            if (isNetworkError && attempt < retries) {
                await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
                continue;
            }
            break;
        }
    }

    throw lastError;
}

export async function getPopularMovies(): Promise<Movie[]> {
    try {
        const data = await fetchTMDB("/movie/popular", 3600);
        return data.results ?? [];
    } catch (err) {
        console.error("getPopularMovies failed:", err);
        return [];
    }
}

export async function getMovieById(id: string) {
    try {
        const data = await fetchTMDB(`/movie/${id}`, 3600);
        return data;
    } catch (err) {
        console.error(`getMovieById failed for id ${id}:`, err);
        return null;
    }
}

export async function searchMovies(query: string): Promise<Movie[]> {
    if (!query.trim()) return [];

    try {
        const data = await fetchTMDB(
            `/search/movie?query=${encodeURIComponent(query.trim())}&include_adult=false&language=en-US&page=1`,
            60
        );
        return data.results ?? [];
    } catch (err) {
        console.error(`searchMovies failed for query "${query}":`, err);
        return [];
    }
}
