import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {BASE_URL, API_KEY, IMAGE_URL, POSTER_SIZE} from '../../api'
import Loader from '../Shared/Loader'
import ErrorMessage from '../Shared/ErrorMessage'
import CastGrid from '../Cast/CastGrid'
import './MovieDetailsPage.css'

export default function MovieDetailsPage({match}) {
  const {id} = match.params
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  const history = useHistory()

  function goBack() {
    history.goBack()
  }

  useEffect(() => {
    setLoading(true)
    setErr(null)
    const fetchDetails = fetch(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
    )
    const fetchCredits = fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    )
    Promise.all([fetchDetails, fetchCredits])
      .then(async ([r1, r2]) => {
        const data1 = await r1.json()
        const data2 = await r2.json()
        setMovie(data1)
        setCast(data2.cast || [])
      })
      .catch(e => setErr(e.message || 'Failed to fetch'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading)
    return (
      <div className="container">
        <Loader />
      </div>
    )
  if (err)
    return (
      <div className="container">
        <ErrorMessage>{err}</ErrorMessage>
      </div>
    )
  if (!movie) return null

  const poster = movie.poster_path
    ? `${IMAGE_URL}/${POSTER_SIZE}${movie.poster_path}`
    : ''
  const backdrop = movie.backdrop_path
    ? `${IMAGE_URL}/w1280${movie.backdrop_path}`
    : ''

  return (
    <div className="container">
      <button type="button" className="back-btn" onClick={goBack}>
        ← Back
      </button>
      <div
        className="details-wrap"
        style={{
          backgroundImage: backdrop ? `url(${backdrop})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <img className="details-poster" src={poster} alt={movie.title} />
        </div>
        <div className="details-info">
          <h1>{movie.title}</h1>
          {movie.tagline && (
            <p style={{fontStyle: 'italic'}}>{movie.tagline}</p>
          )}
          <div className="movie-badges">
            <div className="badge">Rating: ⭐ {movie.vote_average}</div>
            <div className="badge">
              Runtime: {movie.runtime ? `${movie.runtime}m` : '—'}
            </div>
            <div className="badge">Release: {movie.release_date}</div>
            <div className="badge">Status: {movie.status}</div>
            <div className="badge">Language: {movie.original_language}</div>
          </div>

          <p style={{marginTop: 12}}>{movie.overview}</p>

          <h3 style={{marginTop: 18}}>Production</h3>
          <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
            {movie.production_companies?.map(pc => (
              <div
                key={pc.id}
                style={{display: 'flex', alignItems: 'center', gap: 8}}
              >
                {pc.logo_path ? (
                  <img
                    src={`${IMAGE_URL}/w200${pc.logo_path}`}
                    alt={pc.name}
                    style={{height: 32}}
                  />
                ) : (
                  <div style={{color: 'var(--muted)'}}>{pc.name}</div>
                )}
              </div>
            ))}
          </div>

          {movie.homepage && (
            <p style={{marginTop: 12}}>
              <a
                href={movie.homepage}
                target="_blank"
                rel="noreferrer"
                style={{color: 'var(--accent)'}}
              >
                Visit official site
              </a>
            </p>
          )}
        </div>
      </div>

      <section style={{marginTop: 20}}>
        <h2>Cast</h2>
        <CastGrid cast={cast.slice(0, 36)} />
      </section>
    </div>
  )
}
