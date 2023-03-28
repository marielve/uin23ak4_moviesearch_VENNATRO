export default function SearchResults({setSearch, getMovies}) {


 //Github-Gitcollab 
 
        const handleSubmit = (event) =>{
            event.preventDefault()
        }
    
        const handleSearch = (event) =>{
            setSearch(event.target.value)
            console.log(event.target.value)
    
        }

      

        return (
            <form className="searchbar" onSubmit={handleSubmit}>
                <input type="search" placeholder="James Bond.." onChange={handleSearch} />
           
                <button  type="submit" onClick={getMovies}>Search</button>
            </form>
        )
    
}