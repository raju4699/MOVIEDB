import React from 'react'
import {genreMap} from '../utils/genreMap'
import './MovieMeta.css'

export default function MovieMeta({
  releaseDate,
  voteAverage,
  genres = [],
  runtime,
  originalLanguage,
}) {
  const genreNames = genres.length
    ? genres
        .map(g => (typeof g === 'object' ? g.name : genreMap[g] || g))
        .filter(Boolean)
        .slice(0, 3)
    : []
  return (
    <div className="movie-meta-block">
      <div className="meta-left">
        <div className="meta-date">{releaseDate || '—'}</div>
        <div className="meta-genres">{genreNames.join(', ')}</div>
      </div>
      <div className="meta-right">
        <div className="meta-rating">
          ⭐ {voteAverage ? voteAverage.toFixed(1) : '—'}
        </div>
        {runtime ? <div className="meta-runtime">{runtime}m</div> : null}
      </div>
    </div>
  )
}
