'use client';

import { useWatchlist } from '@/lib/hooks/useWatchlist';
import type { WatchlistMovie } from '../../types/watchlist';

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
      onClick={() => (saved ? removeFromWatchlist(movie.id) : addToWatchlist(movie))}
      aria-pressed={saved}
      className="watchlist-button"
    >
      {saved ? '− Remove from Watchlist' : '+ Add to Watchlist'}
    </button>
  );
}