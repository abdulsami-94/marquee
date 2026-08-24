"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
    return (
        <div className="p-8 text-center">
            <p>Something went wrong.</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}