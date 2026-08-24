import { searchMovies } from "@/lib/api/movies";
import MovieGrid from "../../../components/movie/MovieGrid";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const { q } = await searchParams;

    if (!q) {
        return <p className="p-8 text-center">Start typing to search for movies.</p>;
    }

    const movies = await searchMovies(q);

    if (movies.length === 0) {
        return <p className="p-8 text-center">No movies found for "{q}".</p>;
    }

    return <MovieGrid movies={movies} />;
}