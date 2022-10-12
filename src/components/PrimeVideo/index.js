import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovie = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner"
      />
      <div className="sub-container">
        <h1 className="main-heading">Action Movies</h1>
        <MoviesSlider listOfMovies={actionMovies} />
        <h1 className="main-heading">Comedy Movies</h1>
        <MoviesSlider listOfMovies={comedyMovie} />
      </div>
    </div>
  )
}

export default PrimeVideo
