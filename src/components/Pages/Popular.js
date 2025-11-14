import {useEffect, useState} from 'react'
import {BASE_URL, API_KEY} from '../../api'
import MoviesSection from '../Movies/MoviesSection'
import Loader from '../Shared/Loader'
import ErrorMessage from '../Shared/ErrorMessage'

export default function Popular() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        setLoading(true)
        setErr(null)
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        const response = await fetch(url)
        const data = await response.json()
        if (data && Array.isArray(data.results)) {
          setMovies(data.results)
          setTotalPages(data.total_pages || 1)
        } else {
          setErr('Unexpected response')
        }
      } catch (error) {
        setErr(error.message || 'Failed to fetch')
      } finally {
        setLoading(false)
      }
    }
    fetchPopular()
  }, [page])

  return (
    <div className="container">
      {err && <ErrorMessage>{err}</ErrorMessage>}
      {loading ? (
        <Loader />
      ) : (
        <MoviesSection
          title="Popular Movies"
          movies={movies}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  )
}
