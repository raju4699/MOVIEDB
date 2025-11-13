import './Loader.css'

export default function Loader() {
  return (
    <div className="loader">
      <svg width="48" height="48" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#e50914"
          strokeWidth="8"
          strokeDasharray="164"
          strokeDashoffset="0"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}
