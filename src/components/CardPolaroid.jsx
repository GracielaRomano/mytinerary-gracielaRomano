import Card from 'react-bootstrap/Card';
import { Link as Anchor } from "react-router-dom"

export default function CardPolaroid({ src, alt, text, id}) {
  return (
        <Card className="bg-dark text-white card-carousel">
        <Card.Img src={src} alt={alt} className="card-img" />
        <Card.ImgOverlay>
          <Card.Title className='card-title-polaroid'>{text}</Card.Title>
          
          <Anchor to={'/city/'+_id} className="btn btn-primary btn-card" >Go</Anchor>
        </Card.ImgOverlay>
        </Card>
  )
}