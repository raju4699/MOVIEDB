import {useEffect, useState} from 'react'
import {BASE_URL, API_KEY} from '../../api'
import MoviesSection from '../Movies/MoviesSection'
import Loader from '../Shared/Loader'
import ErrorMessage from '../Shared/ErrorMessage'

export default function TopRated() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    setLoading(true)
    setErr(null)
    fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    )
      .then(r => r.json())
      .then(data => {
        if (data?.results) {
          setMovies(data.results)
          setTotalPages(Math.min(data.total_pages || 1, 500))
        } else setErr('Unexpected response')
      })
      .catch(e => setErr(e.message || 'Failed to fetch'))
      .finally(() => setLoading(false))
  }, [page])

  return (
    <div className="container">
      {err && <ErrorMessage>{err}</ErrorMessage>}
      {loading ? (
        <Loader />
      ) : (
        <MoviesSection
          title="Top Rated Movies"
          movies={movies}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  )
}
