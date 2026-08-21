import { getPopularMovies } from "../../lib/api/movies";
import MovieCard from "../../components/movie/MovieCard";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main>
      <h1>Popular Movies</h1>

      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}