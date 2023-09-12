import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import apiUrl from "../apiUrl";

export default function CardItineraries({ title, imageSrc, content, id }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  }; 

  const [like, setLike] =useState(0);
  const [isLike, setIsLike] = useState(false)
  const user = useSelector((store) => store.users.user);
  const onLikeButton = () => {
    if( Object.keys(user).length > 0){
    setLike(like + (isLike ? -1 :1));
    setIsLike(!isLike);
    let token = localStorage.getItem('token')
    let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
    axios.post(apiUrl +'likes',{"itinerary_id": id}, authorization)
    }
  }

  useEffect(() => {
     axios(apiUrl +'likes?itinerary_id='+id)
     .then(res => setLike(res.data.response))
     .catch(err=> console.log(err))
  }, []);

  return (
    <div className={`card-itineraries ${expanded ? 'expanded' : ''}`}>
      <h3 className='title-card-itineraries'>{title}</h3>
      <img className="card-image" src={imageSrc} alt="Card" />
      <div className="card-content">
        <div className="favorite-count" style={{ cursor: Object.keys(user).length > 0 ? "pointer" : "" }}>
          <p className={'' + (isLike ? "text violet":"")}>
          <i  className={`''+ ${isLike ? "bi bi-heart-fill": 'bi bi-heart'}`} onClick={onLikeButton}/>{like}
          </p>
        </div>
        <div className="expand-button" onClick={toggleExpand}>
          <i className={`arrow ${expanded ? 'bi bi-caret-up-fill' : 'bi bi-caret-down-fill'}`}></i>
        </div>
      </div>
      {expanded && <div className="expanded-content" >{content}</div>}
    </div>
   
  )
}


