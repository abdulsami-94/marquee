import type { Movie } from "../../types/movie";

type MovieCardProps = {
    movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder-poster.jpg";

    return (
        <article>
            <img
                src={posterUrl}
                alt={movie.title}
            />

            <h2>{movie.title}</h2>
            <p>⭐️ {movie.vote_average.toFixed(1)}</p>
        </article>
    );
}