import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import {BASE_URL, API_KEY} from '../../api'
import MoviesSection from '../Movies/MoviesSection'
import Loader from '../Shared/Loader'
import ErrorMessage from '../Shared/ErrorMessage'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function SearchResults() {
  const q = useQuery()
  const query = q.get('q') || ''
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    if (!query) return
    setLoading(true)
    setErr(null)
    fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
        query,
      )}&page=${page}`,
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
  }, [query, page])

  if (!query)
    return (
      <div className="container">
        <h2>Type something in search bar</h2>
      </div>
    )

  return (
    <div className="container">
      {err && <ErrorMessage>{err}</ErrorMessage>}
      {loading ? (
        <Loader />
      ) : (
        <MoviesSection
          title={`Results for "${query}"`}
          movies={movies}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  )
}
