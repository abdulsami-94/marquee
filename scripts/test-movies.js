require('dotenv').config({ path: '.env.local' });

async function test() {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    const data = await res.json();
    console.log(JSON.stringfy(data.results[0], null, 2));
}

test();