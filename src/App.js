import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import SingleMovie from './components/SingleMovie'
import SearchedMovies from './components/SearchedMovies'

const App = (
  <Router>
    <div>
      <h1 className="movies-heading">movieDB</h1>{' '}
      {/* Add the "movieDB" heading */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={PopularMovies} />
        <Route exact path="/top-rated" component={TopRatedMovies} />
        <Route exact path="/upcoming" component={UpcomingMovies} />
        <Route exact path="/movie/:id" component={SingleMovie} />
        <Route exact path="/search/:query" component={SearchedMovies} />
      </Switch>
    </div>
  </Router>
)

export default App
