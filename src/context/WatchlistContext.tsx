'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { WatchlistMovie } from '../../types/watchlist';

const STORAGE_KEY = 'marquee:watchlist';

type WatchlistContextValue = {
    watchlist: WatchlistMovie[];
    isLoaded: boolean;
    addToWatchlist: (movie: WatchlistMovie) => void;
    removeFromWatchlist: (id: number) => void;
    isInWatchlist: (id: number) => boolean;
};

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

export function WatchlistProvider({ children }: { children: ReactNode }) {
    const [watchlist, setWatchlist] = useState<WatchlistMovie[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const stored = window.localStorage.getItem(STORAGE_KEY);
            if (stored) setWatchlist(JSON.parse(stored));
        } catch (error) {
            console.error('Failed to read watchlist from localStrage:', error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (!isLoaded) return;
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
        } catch (error) {
            console.error('Failed to save watchlist to localStorage:', error);
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

    return (
        <WatchlistContext.Provider
            value={{ watchlist, isLoaded, addToWatchlist, removeFromWatchlist, isInWatchlist }}
        >
            { children }
        </WatchlistContext.Provider>
    );
}

export function useWatchlist() {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error('useWatchlist must be used within a WatchlistProvider');
    }
    return context;
}