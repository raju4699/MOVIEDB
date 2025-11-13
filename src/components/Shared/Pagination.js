import './Pagination.css'

export default function Pagination({page, totalPages, setPage}) {
  function prev() {
    setPage(p => Math.max(1, p - 1))
  }
  function next() {
    setPage(p => Math.min(totalPages, p + 1))
  }
  return (
    <div className="pagination">
      <button
        type="button"
        className="page-btn"
        onClick={prev}
        disabled={page <= 1}
      >
        Prev
      </button>
      <div style={{fontWeight: 700}}>
        {page} / {totalPages}
      </div>
      <button
        type="button"
        className="page-btn"
        onClick={next}
        disabled={page >= totalPages}
      >
        Next
      </button>
    </div>
  )
}
