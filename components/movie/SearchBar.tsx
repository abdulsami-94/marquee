"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!query.trim() && pathname !== "/search") return;

    const timeout = setTimeout(() => {
      startTransition(() => {
        router.replace(
          query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : "/search",
          { scroll: false }
        );
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [query, router, pathname]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search movies..."
      className={`px-3 py-2 rounded border transition-opacity ${isPending ? "opacity-60" : ""}`}
    />
  );
}