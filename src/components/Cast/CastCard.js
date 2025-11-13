import {IMAGE_URL, POSTER_SIZE} from '../../api'
import './CastCard.css'

export default function CastCard({member}) {
  const photo = member.profile_path
    ? `${IMAGE_URL}/${POSTER_SIZE}${member.profile_path}`
    : ''
  return (
    <div className="cast-card">
      <img
        className="cast-photo"
        src={photo}
        alt={member.name || member.original_name}
      />
      <div className="cast-name">{member.original_name || member.name}</div>
      <div className="cast-role">{member.character}</div>
    </div>
  )
}
