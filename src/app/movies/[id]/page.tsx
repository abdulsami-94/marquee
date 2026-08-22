import { getMovieById } from "../../../../lib/api/movies";

export default async function MoviePage({ params }: { params: {id:string } }) {
    const movie = await getMovieById(params.id);
    return(
        <>
            <p>HI</p>
        </>
    );
}