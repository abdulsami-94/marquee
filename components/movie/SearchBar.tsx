"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [isPending, startTransition] = useTransition();

  const isUserTyping = useRef(false);
  const pathnameRef = useRef(pathname);

  // Keep pathname ref updated without making it a dependency of the debounce effect
  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  // Debounced search navigation: ONLY fires when the user types in the input
  useEffect(() => {
    if (!isUserTyping.current) return;

    const trimmed = query.trim();

    // If user cleared the input and is not on /search, do not redirect
    if (!trimmed && pathnameRef.current !== "/search") {
      isUserTyping.current = false;
      return;
    }

    const timeout = setTimeout(() => {
      isUserTyping.current = false;
      startTransition(() => {
        router.replace(
          trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search",
          { scroll: false }
        );
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [query, router]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      isUserTyping.current = false;
      const trimmed = query.trim();
      if (trimmed) {
        router.replace(`/search?q=${encodeURIComponent(trimmed)}`, { scroll: false });
      }
    }
  };

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => {
        isUserTyping.current = true;
        setQuery(e.target.value);
      }}
      onKeyDown={handleKeyDown}
      placeholder="Search movies..."
      className={`px-3 py-2 rounded border transition-opacity ${isPending ? "opacity-60" : ""}`}
    />
  );
}
