

export default function MovieCard({poster, title, year, genre, director, actors, awards}) {
    return ( 
        <article className= "movie-card"> 
            <img src={(poster !== "N/A") ? poster: "cryingcat.png"} alt={title} />
            <h3>{title}</h3>
            <p>Year: {year}</p>
            <p>Genre: {genre}</p> 
            <p>Director: {director}</p> 
            <p>Actors: {actors}</p>
            <p>Awards: {awards}</p>
        </article>
        
    )
}

