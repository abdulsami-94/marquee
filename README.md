# Marquee

Marquee is a movie discovery app for browsing popular movies, searching for titles, viewing movie details, and saving movies to a personal watchlist.

## Features

- Browse popular movies
- Search for movies
- View movie details, including the overview, release date, and rating
- Add or remove movies from a watchlist saved in your browser

## Tech stack

- Next.js and React
- TypeScript
- Tailwind CSS
- The Movie Database (TMDB) API

## Getting started

### Requirements

- Node.js
- A TMDB API key

### Setup

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/abdulsami-94/marquee.git
   cd marquee
   npm install
   ```

2. Create a `.env.local` file in the project root and add your TMDB API key:

   ```env
   TMDB_API_KEY=your_tmdb_api_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server |
| `npm run lint` | Check the code with ESLint |

## Notes

- Your watchlist is stored in your browser's local storage. It is not synced between devices.
- Movie information and images are provided by TMDB.

This product uses the TMDB API but is not endorsed or certified by TMDB.
