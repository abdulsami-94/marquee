import { BBH_Bartle } from "next/font/google";
import type { Movie } from "../../../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

export async function  getPopularMovies(): Promise<Movie[]> {
    const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error(`TMDB request failed: ${res.status}`);
    }

    const data = await res.json();
    return data.results;
}

export async function getMovieById(id: string){
    const url = `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`;
    try {
        const res = await fetch(url, { next: { revalidate: 3600 } });
        if (!res.ok) {
            throw new Error(`TMDB request failed: ${res.status} for id ${id}`);
        }
        return res.json();
    } catch (err) {
        console.error(`getMovieById failed for id ${id}:`, err);
        throw err;
    }
}

export async function searchMovies(query: string): Promise<Movie[]> {
    if (!query.trim()) return [];

    const res = await fetch(
        `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
        {
            headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}`},
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) throw new Error(`Search failed: ${res.status}`);

    const data = await res.json();
    return data.results;
}