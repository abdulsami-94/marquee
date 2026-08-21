import { getPopularMovies } from "../../lib/api/movies";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main>
      <h1>Popular Movies</h1>

      <ol className="list-decimal pl-6">
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ol>
    </main>
  );
}