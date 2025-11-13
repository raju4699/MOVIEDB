import MovieGrid from './MovieGrid'
import Pagination from '../Shared/Pagination'
import './MoviesSection.css'

export default function MoviesSection({
  title,
  movies,
  page,
  setPage,
  totalPages,
}) {
  return (
    <section className="movies-section">
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      <MovieGrid movies={movies} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </section>
  )
}
