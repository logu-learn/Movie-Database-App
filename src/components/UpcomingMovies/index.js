import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import MovieGrid from '../MovieGrid'

const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da' // Replace with your actual API key
const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [page, setPage] = useState(1)
  const history = useHistory()

  const fetchMovies = async url => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setUpcomingMovies(data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    fetchMovies(upcomingMoviesURL)
  }, [page])

  const handleViewDetails = movieId => {
    history.push(`/movie/${movieId}`)
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className="upcoming-movies">
      <h1 className="movies-heading">Upcoming Movies</h1>
      <MovieGrid movies={upcomingMovies} />
      <button type="button" onClick={handlePrevPage} disabled={page === 1}>
        Prev
      </button>
      <button type="button" onClick={handleNextPage}>
        Next
      </button>
      <p>{page}</p>
      <button type="button" onClick={handleViewDetails}>
        View Details
      </button>
    </div>
  )
}

export default UpcomingMovies
