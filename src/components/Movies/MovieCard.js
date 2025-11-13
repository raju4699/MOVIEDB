import {Link} from 'react-router-dom'
import {IMAGE_URL, POSTER_SIZE} from '../../api'
import './MovieCard.css'

export default function MovieCard({movie}) {
  const poster = movie.poster_path
    ? `${IMAGE_URL}/${POSTER_SIZE}${movie.poster_path}`
    : ''
  const title = movie.title || movie.name || movie.original_title || 'Untitled'
  return (
    <div className="movie-card" aria-label={title}>
      <img className="movie-poster" src={poster} alt={title} />
      <div className="card-body">
        <h3 className="movie-title" title={title}>
          {title}
        </h3>
        <p className="overview">
          {movie.overview || 'No description available.'}
        </p>
        <div
          style={{display: 'flex', gap: 10, alignItems: 'center', marginTop: 6}}
        >
          <Link to={`/movie/${movie.id}`}>
            <button type="button" className="details-btn">
              View Details
            </button>
          </Link>
        </div>
        <div style={{marginTop: 8}}>
          <div className="movie-meta" style={{justifyContent: 'space-between'}}>
            <div style={{color: 'var(--muted)'}}>
              {movie.release_date || movie.first_air_date || '—'}
            </div>
            <div style={{fontWeight: 800}}>
              ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : '—'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
