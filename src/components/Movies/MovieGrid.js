import MovieCard from './MovieCard'
import './MovieGrid.css'

export default function MovieGrid({movies}) {
  if (!movies || movies.length === 0)
    return <div style={{color: 'var(--muted)'}}>No movies found.</div>
  return (
    <div className="movies-grid">
      {movies.map(m => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  )
}
