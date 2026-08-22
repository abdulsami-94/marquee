import { getMovieById } from "../../../lib/api/movies";
import { notFound } from "next/navigation";
import { getPosterUrl } from "@/lib/utils"
import Image from "next/image";

export default async function MoviePage({ params }: { params: Promise<{id:string }> }) {
    const { id } = await params;
    const movie = await getMovieById(id);

    if (!movie || !movie.id) {
        notFound();
    }
    return(
        <div className="p-8">
            <Image
                src={getPosterUrl(movie.poster_path)}
                alt={movie.title}
                width={300}
                height={400}
            />
            <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
            <p className="text-sm text-muted-foreground">{movie.release_date}</p>
            <p className="mt-4">{movie.overview}</p>
            <p className="mt-2">⭐️ {movie.vote_average}</p>
        </div>
    );
}