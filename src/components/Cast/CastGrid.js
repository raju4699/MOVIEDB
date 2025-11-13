import CastCard from './CastCard'
import './CastGrid.css'

export default function CastGrid({cast}) {
  if (!cast || cast.length === 0)
    return <div style={{color: 'var(--muted)'}}>No cast information.</div>
  return (
    <div className="cast-grid">
      {cast.map(member => (
        <CastCard key={member.credit_id || member.cast_id} member={member} />
      ))}
    </div>
  )
}
