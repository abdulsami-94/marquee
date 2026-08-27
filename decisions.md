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
    bypassed this my using unoptimized in the next app     

6. Thinking about ading a loading skeleton in the main page when the data(images) is loading 
    tracking that will need useState and to do that i need to use client side 

7. Adding the Serch bar 2 options local state search vs URL driven 
    going with the URL one becz its sharable 
    got 2 search folder one in main and other in the app
    moved the search in to main and deleted the app/search

    
8. Need to keep the navbar permanent in all the page 
    moved the nav components into the layout.tsx file 

    and fix the search bar its not giving result's 
    its giving 401 issue related to API key
    dropping the header pattern and using the same API call methods the other 2 functions

9. Watch list 
    first i decided to do auth and db for this but it was too much for the begining so now i'm going with local storage

    in the nav i've used the wishlist but i wrote the code 
    in watchlist so i fixed it 
    
    i forgot to pass prop in the Watchlist Button 
    now there is a problem when a user click the add or remove button 
    it open's the movie details because the add button is inside the 
    moviecard which is clickable

10. The watchlist doesn't have grid layout like the homepage 
    if any movie is removed from watchlist it don't go unless page refershed
    
