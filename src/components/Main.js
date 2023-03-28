import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import SearchResults from "./SearchResults"



export default function Main({movies, setSearch, getMovies}) {
    console.log(movies)
    return (
        <>  
            
            <SearchResults setSearch={setSearch} getMovies={getMovies} />
            <section className='movie-view' >
                
                {movies.map((item, index) => (      
                    <MovieCard key={index} poster={item?.Poster} title={item?.Title} year={item?.Year} genre={item?.Genre} director={item?.Director}  actors={item?.Actors} awards={item?.Awards} />
                ))}
            </section>
        </>
    );
}




