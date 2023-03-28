import { useParams } from "react-router-dom"
export default function MoviePage({movies}){
    const {slug} = useParams()
    const movie = movies.find((rec) => rec?.movies?.label.replace(/\s/g, "-").toLowerCase() === slug)
    console.log(movie?.Title)
    
    
    return (
        <section>
            <h1>{movie?.Title}</h1>
            <img src={movie?.image} alt={movie?.Title} />
        </section>
    )
}