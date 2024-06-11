import {useState, useEffect} from 'react'
import MovieGrid from '../MovieGrid'

const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da' // Replace with your actual API key
const topRatedMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [page, setPage] = useState(1)

  const fetchMovies = async url => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTopRatedMovies(data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    fetchMovies(topRatedMoviesURL)
  }, [page])

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className="top-rated-movies">
      <h1 className="movies-heading">Top Rated Movies</h1>
      <MovieGrid movies={topRatedMovies} />
      <button type="button" onClick={handlePrevPage} disabled={page === 1}>
        Prev
      </button>
      <button type="button" onClick={handleNextPage}>
        Next
      </button>
      <p>{page}</p>
      <button type="button">View Details</button>
    </div>
  )
}

export default TopRatedMovies
