import { useState } from 'react';


export default function CardItineraries({ title, imageSrc, favoriteCount, content, id }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  }; 
  return (
    <div className={`card-itineraries ${expanded ? 'expanded' : ''}`}>
      <h3 className='title-card-itineraries'>{title}</h3>
      <img className="card-image" src={imageSrc} alt="Card" />
      <div className="card-content">
        <div className="favorite-count">
          <i className="bi bi-heart-fill"></i>{favoriteCount}
        </div>
        <div className="expand-button" onClick={toggleExpand}>
          <i className={`arrow ${expanded ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'}`}></i>
        </div>
      </div>
      {expanded && <div className="expanded-content">{content}</div>}
    </div>
   
  )
}


