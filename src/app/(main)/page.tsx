import { getPopularMovies } from "@/lib/api/movies";
import MovieGrid from "../../../components/movie/MovieGrid";

export const dynamic = "force-dynamic";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main>
      <h1>Popular Movies</h1>
      <MovieGrid movies={movies} />
    </main>
  );
}