import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {
  const [q, setQ] = useState('')
  const history = useHistory()

  function submit(e) {
    e.preventDefault()
    if (!q.trim()) return

    history.push(`/search?q=${encodeURIComponent(q.trim())}`)
    setQ('')
  }

  return (
    <form className="searchbar" onSubmit={submit}>
      <input
        className="search-input"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search movies…"
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  )
}
