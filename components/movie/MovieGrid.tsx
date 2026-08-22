import type { Movie } from "../../types/movie";
import MovieCard from "./MovieCard";
import Link from "next/link";

type MovieGridProps = {
    movies: Movie[];
};

export default function MovieGrid({ movies }: MovieGridProps) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movies.map((movie) => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                    <MovieCard key={movie.id} movie={movie} />
                </Link>
            ))}
        </div>
    )
}