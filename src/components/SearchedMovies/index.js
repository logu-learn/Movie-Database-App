import {useState, useEffect, useCallback} from 'react'
import {useParams} from 'react-router-dom'
import MovieGrid from '../MovieGrid' // Adjust the import path accordingly

const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da' // Replace with your actual API key

const SearchedMovies = () => {
  const {query} = useParams()
  const [searchedMovies, setSearchedMovies] = useState([])

  const fetchSearchedMovies = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
      )
      const data = await response.json()
      setSearchedMovies(data.results)
    } catch (error) {
      console.error('Error fetching searched movies:', error)
    }
  }, [query])

  useEffect(() => {
    fetchSearchedMovies() // Call the function inside useEffect
  }, [fetchSearchedMovies])

  return (
    <div className="searched-movies">
      <h1 className="movies-heading">Search Results for &apos;{query}&apos;</h1>
      <MovieGrid movies={searchedMovies} />
    </div>
  )
}

export default SearchedMovies
