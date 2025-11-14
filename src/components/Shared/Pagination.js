import './Pagination.css'

export default function Pagination({page, totalPages, setPage}) {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  return (
    <div className="pagination">
      <button
        type="button"
        className="page-btn"
        onClick={handlePrev}
        disabled={page === 1}
      >
        Prev
      </button>

      <p className="current-page">{page}</p>

      <button
        type="button"
        className="page-btn"
        onClick={handleNext}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  )
}
