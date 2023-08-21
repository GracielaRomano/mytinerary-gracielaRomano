import { Link as Anchor } from "react-router-dom"
import NavbarTransparent from "./NavbarTransparent";

export default function Details({ src, alt, text, id, description}) {
    const backgroundStyle = {
        backgroundImage: `url(${src})`,
      };

  return (
    <div className="background-container" style={backgroundStyle}>
      <NavbarTransparent/>
      <div className="text-overlay">
        <h1 className="title-details">{text}</h1>
        <p className="d-none d-sm-block">{description}</p>
      </div>
      <Anchor to={'/itineraries'} className="btn btn-bg-details" >View Itinerary</Anchor>
    </div>
);

        
}
{/*<Card className="bg-dark text-white card-cities">
        <Card.Img src={src} alt={alt} className="card-img-cities" />
        <Card.ImgOverlay>
          <Card.Title className='card-title-cities'>{text}</Card./>
          <FontAwesomeIcon className='location-img' icon={faLocationDot} /><span className='card-loc'>{loc}</span>
          <Anchor to={'/city/'+_id} className="btn btn-primary btn-card-cities" >View More</Anchor>
        </Card.ImgOverlay>
</Card>
  )*/}