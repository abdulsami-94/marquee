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

5. Need to add a notfound.tsx if the server gives 404
    and a loading page to give the sence of loading when clicked the single movies poster
    while doing this i didn't knew how to render the movie 
    had some issue is placement of lib folder it was in root and so moved it to into the src
    there is an issue related to movies details page TMDB throwing 404
    i had forgot to add base url for image so it wasn't rendering images

    Fetching Failed issue getting error response before the request reaches the server
    but this issue is only on some page the others are rendering fine.

    this issue is next image optimization which is not loading images fast 
    

    


