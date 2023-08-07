import Card from 'react-bootstrap/Card';
import { Link as Anchor } from "react-router-dom"


export default function CardPolaroid({ src, alt, text, id}) {
  return (
        

        <Card className="bg-dark text-white card-carousel">
        <Card.Img src={src} alt={alt} className="card-img" />
        <Card.ImgOverlay>
          <Card.Title className='card-title-polaroid'>{text}</Card.Title>
          
          <Anchor to={'/city/'+id} className="btn btn-primary btn-card" >Go</Anchor>
        </Card.ImgOverlay>
        </Card>
  )
}

{/*<div className="card bg-dark text-white card-carousel " >
            <img src={src} alt={alt} className="card-img"/>
            <div className="card-img-overlay">
                <h5 className="card-title card-title-polaroid">{text}</h5>
                <a href="#" className="btn btn-primary btn-card">Go</a>
            </div>
  </div>*/}