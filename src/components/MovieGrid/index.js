import './index.css'

const MovieGrid = ({movies}) => (
  <div className="movie-grid">
    {movies.map(movie => (
      <div key={movie.id} className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
          className="movie-image"
        />
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-rating">Rating: {movie.vote_average}</p>
      </div>
    ))}
  </div>
)

export default MovieGrid
