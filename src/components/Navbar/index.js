import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './index.css'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const history = useHistory()

  const handleSearchChange = event => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = () => {
    if (searchQuery) {
      history.push(`/search/${searchQuery}`)
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Popular
      </Link>
      <Link to="/top-rated" className="navbar-link">
        Top Rated
      </Link>
      <Link to="/upcoming" className="navbar-link">
        Upcoming
      </Link>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </nav>
  )
}

export default Navbar
