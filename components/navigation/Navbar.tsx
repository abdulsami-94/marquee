import Link from "next/link";
import SearchBar from "../movie/SearchBar";
import { Suspense } from "react";

export default function Navbar() {
    return (
        <header className="border-b">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

            <Link href="/" className="text-xl font-bold">Marquee</Link>

            <div>
                <Suspense fallback={<input placeholder="Search movies..." className="px-3 py-2 rounded border" disabled />}>
                    <SearchBar />
                </Suspense>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/watchlist">Watchlist</Link>
                <Link href="/login" className="rounded-lg border px-4 py-2">Login</Link>
            </div>
            </nav>
        </header>
    )
}