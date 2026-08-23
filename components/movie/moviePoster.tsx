"use client";

import { useState } from "react";
import Image from "next/image";

export default function MoviePoster({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="realtive aspect-[2/3] w-full overflow-hidden rounded-lg bg-[#1e1e1b]">
            {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-[#1e1e1b] via-[#2a2a26] to-[#1e1e1b] bg-[length:200%_100%]" />
            )}

            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-widthL 1200px) 25vw, 200px"
                className={`object-cover transition-opacity duration-500 
                    ${loaded ? "opacity-100" : "opacity-0"}`
                    }
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}