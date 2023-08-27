import { Link as Anchor } from "react-router-dom"

export default function Details({ src, alt, text, id, description}) {
    const backgroundStyle = {
        backgroundImage: `url(${src})`, 
    };

    return (
      <>
      
      <div className="background-container" style={backgroundStyle}>
        <div className="text-overlay">
          <h1 className="title-details">{text}</h1>
          <p className="d-none d-sm-block">{description}</p>
        </div>
        <Anchor to={'/itineraries'} className="btn btn-bg-details" >View Itinerary</Anchor>
      </div>
      </>
    );
}
