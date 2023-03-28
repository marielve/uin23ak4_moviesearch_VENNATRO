import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Main from './components/Main';
import MoviePage from './components/MoviePage'
import { useState, useEffect } from 'react';



function App() {

  const [movies, setMovies] = useState([])
  const [SearchResults, setSearch] = useState('James+Bond')
  const [movieDetails, setMovieDetails] = useState([])
 
  const getMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=bf18dd9f&s=${SearchResults}&type=movie`)
    const data = await response.json();
    const moviesWithDetails = [];


    for (let index = 0; index < 10; index++) {
      let imdb = data.Search[index].imdbID;
      const newResponse = await fetch(`https://www.omdbapi.com/?i=${imdb}&apikey=bf18dd9f`)
      const newData = await newResponse.json();
      moviesWithDetails[index] = newData;
    }

    console.log(data.Search)
    setMovies(moviesWithDetails)
    
  }

  useEffect(() => {
    getMovies()
  }, [])

  console.log(movies);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main movies={movies} setSearch={setSearch} getMovies={getMovies} />} />
        <Route path=':slug' element={<MoviePage movies={movies} />} />
      </Route>
    </Routes>
  );
}

export default App;
