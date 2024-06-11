import {useState, useEffect} from 'react'

const API_KEY = 'f32b79895b21468afbdd6d5342cbf3da'
const SingleMovie = ({match}) => {
  const [movie, setMovie] = useState(null)

  const fetchMovieDetails = async movieId => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      )
      const data = await response.json()
      setMovie(data)
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }

  useEffect(() => {
    fetchMovieDetails(match.params.id)
  }, [match.params.id])

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          {/* Display other movie details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default SingleMovie
