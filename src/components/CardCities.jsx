import Card from 'react-bootstrap/Card';
import { Link as Anchor } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from'@fortawesome/free-solid-svg-icons'


export default function CardCities({ src, alt, text, loc, id}) {
  return (
        <Card className="bg-dark text-white card-cities">
        <Card.Img src={src} alt={alt} className="card-img-cities" />
        <Card.ImgOverlay>
          <Card.Title className='card-title-cities'>{text}</Card.Title>
          <FontAwesomeIcon className='location-img' icon={faLocationDot} /><span className='card-loc'>{loc}</span>
          <Anchor to={'/city/'+id} className="btn btn-primary btn-card-cities" >View More</Anchor>
        </Card.ImgOverlay>
        </Card>
  )
}