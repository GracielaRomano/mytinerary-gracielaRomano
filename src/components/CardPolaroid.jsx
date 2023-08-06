import Card from 'react-bootstrap/Card';


export default function CardPolaroid({src, alt, text}) {
  return (
        

        <Card className="bg-dark text-white card-carousel">
        <Card.Img src={src} alt={alt} className="card-img" />
        <Card.ImgOverlay>
          <Card.Title className='card-title-polaroid'>{text}</Card.Title>
          
          <a href="#" className="btn btn-primary btn-card" >Go</a>
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