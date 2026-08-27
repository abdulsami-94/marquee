'use client';

import Link from "next/link";
import { useWatchlist } from "@/context/WatchlistContext";
import { WatchlistButton } from "../../../../components/watchlist/WatchlistButton";
import MoviePoster from "../../../../components/movie/MoviePoster";
import { getPosterUrl } from "@/lib/utils";

export default function WatchlistPage() {
    const { watchlist, isLoaded } = useWatchlist();

    if (!isLoaded) {
        return <p className="watchlist-status">Loading your watchlist</p>;
    }

    if (watchlist.length === 0) {
        return (
            <div className="watchlist-empty">
                <p>Your watchlist is empty.</p>
                <Link href="/">Browse movies</Link>
            </div>
        );
    }

    return ( 
        <section>
            <h1 className="mb-4 text-2xl font-semibold">My Watchlist</h1>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {watchlist.map((movie) => (
                    <div key={movie.id} className="watchlist-item">
                        <Link href={`/movies/${movie.id}`}>
                            <MoviePoster src={getPosterUrl(movie.posterPath)} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>{movie.releaseDate}</p>
                        </Link>
                        <WatchlistButton movie={movie} />
                    </div>
                ))}
            </div>
        </section>
    );
}