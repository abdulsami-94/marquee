'use client';

import type { WatchlistMovie } from '../../types/watchlist';
import { useWatchlist } from "@/context/WatchlistContext";

type WatchlistButtonProps = {
  movie: WatchlistMovie;
};

export function WatchlistButton({ movie }: WatchlistButtonProps) {
  const { isLoaded, isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  if (!isLoaded) {
    return (
      <button disabled className="watchlist-button watchlist-button--pending">
        …
      </button>
    );
  }

  const saved = isInWatchlist(movie.id);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        saved ? removeFromWatchlist(movie.id) : addToWatchlist(movie);
        }}
        aria-pressed={saved}
        className="watchlist-button"
    >
      {saved ? '− Remove from Watchlist' : '+ Add to Watchlist'}
    </button>
  );
}