import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

            <Link href="/" className="text-xl font-bold">Marquee</Link>

            <div className="flex-1 px-8">
                <form className="mx-auto max-w-lg">
                    <input
                        type="search"
                        placeholder="Search Movies..."
                        className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2" />
                </form>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/wishlist">Wishlist</Link>
                <Link href="/login" className="rounded-lg border px-4 py-2">Login</Link>
            </div>
            </nav>
        </header>
    )
}