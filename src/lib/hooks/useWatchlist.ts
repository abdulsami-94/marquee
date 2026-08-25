'use client';

import { useCallback, useEffect, useState } from 'react';
import type { WatchlistMovie } from '../../../types/watchlist';

const STORAGE_KEY = 'marquee:watchlist';

export function useWatchlist() {
    const [watchlist, setWatchlist] = useState<WatchlistMovie[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setWatchlist(JSON.parse(stored));
            }
        } catch (error) {
            console.error('Failed to read watchlist from localStorage:', error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
        } catch (error) {
            console.error('Failed to save watchlist to localStroage:', error);
        }
    }, [watchlist, isLoaded]);

    const addToWatchlist = useCallback((movie: WatchlistMovie) => {
        setWatchlist((current) => {
            if (current.some((m) => m.id === movie.id)) return current;
            return [...current, movie];
        });
    }, []);

    const removeFromWatchlist = useCallback((id: number) => {
        setWatchlist((current) => current.filter((m) => m.id !== id));
    }, []);

    const isInWatchlist = useCallback(
        (id: number) => watchlist.some((m) => m.id === id),
        [watchlist]
    );

    return { watchlist, isLoaded, addToWatchlist, removeFromWatchlist, isInWatchlist };
}