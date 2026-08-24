"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const timeout = setTimeout(() => {
            startTransition(() => {
                router.replace(
                    query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : "/search",
                    { scroll: false }
                );
            })    
        }, 400);

        return () => clearTimeout(timeout);
    }, [query, router]);

    return(
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className={`px-3 py-2 rounded transition-opacity ${isPending ? "opacity-60" : ""}`}
        />
    );
}