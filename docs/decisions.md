1.Tested the API by rendering 20 movies had some issue in the movie's type so made a movies.ts and declared the types

2. Made the movie card components
    Home → fetches data
    MovieGrid → arranges multiple movies
    MovieCard → displays one movie
    Movie type → defines what movie data looks like

3. Making the Navbar
    the navbar was't rendering the issue was 2 page.tsx
    src/app/page.tsx and src/app/(main)/page.tsx
    fixed this by moving the movie fetch logig from src/app/page.tsx to src/app/(main)/page.tsx now it shows

4. Making the Single Movie Details Page
    Having problem's in using Link to link movies page
    Closed Link closing tag to early
    
