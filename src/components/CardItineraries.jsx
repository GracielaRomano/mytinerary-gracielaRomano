import { useState } from 'react';


export default function CardItineraries({ title, imageSrc, favoriteCount, content, id }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  }; 

  const [like, setLike] =useState(0);
  const [isLike, setIsLike] = useState(false)
  const onLikeButton = () => {
    setLike(like + (isLike ? -1 :1));
    setIsLike(!isLike);
  }
  return (
    <div className={`card-itineraries ${expanded ? 'expanded' : ''}`}>
      <h3 className='title-card-itineraries'>{title}</h3>
      <img className="card-image" src={imageSrc} alt="Card" />
      <div className="card-content">
        <div className="favorite-count">
          <p className={'' + (isLike ? "text violet":"")}>
          <i  className="bi bi-heart-fill " onClick={onLikeButton}/>{favoriteCount} {like}
          </p>
        </div>
        <div className="expand-button" onClick={toggleExpand}>
          <i className={`arrow ${expanded ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'}`}></i>
        </div>
      </div>
      {expanded && <div className="expanded-content">{content}</div>}
    </div>
   
  )
}


