'use client';

import Link from "next/link";
import { useWatchlist } from "@/lib/hooks/useWatchlist";
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
        <section className="watchlist-page">
            <h1>My Watchlist</h1>
            <div className="watchlist-grid">
                {watchlist.map((movie) => (
                    <div key={movie.id} className="watchlist-item">
                        <Link href="{`/movies/${movie.id}`}">
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