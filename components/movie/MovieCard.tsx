import type { Movie } from "../../types/movie";
import Link from "next/link";
import { getPosterUrl } from "@/lib/utils";
import MoviePoster from "./MoviePoster";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movies/${movie.id}`} className="group block">
      <MoviePoster
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
      />

      <div className="mt-2">
        <h2 className="truncate font-medium group-hover:text-gray-300">
          {movie.title}
        </h2>

        <p className="text-sm text-gray-400">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </Link>
  );
}