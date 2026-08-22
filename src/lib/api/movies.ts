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
    const res = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
        { next: { revalidate: 3600} }
    );

    if (!res.ok) {
        throw new Error(`TMDB request failed: ${res.status}`);
    }

    return res.json();
}