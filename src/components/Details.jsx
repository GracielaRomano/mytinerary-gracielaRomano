import { useState, useEffect } from 'react';
import { Link as Anchor } from "react-router-dom"
import RotateLeft from './RotateLeft';
import CardItineraries from './CardItineraries';
import ContenItineraries from './ContenItineraries';
import Features from './Features';
import { useSelector,useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries"
const { read_itineraries } = itinerary_actions

export default function Details({ src, alt, text, id, description, country}) {    
    const backgroundStyle = {backgroundImage: `url(${src})`};
    const resultNotFound = useSelector(store => store.itineraries.resultNotFound);
    const [showItineraries, setShowItineraries] = useState(false);
    const itineraries = useSelector(store=>store.itineraries.itineraries)
    const dispatch = useDispatch()

    const toggleItineraries= ()=>{setShowItineraries(!showItineraries) }
    useEffect(
      ()=>{
        dispatch(read_itineraries({city_id: id }))
      },[]
    )

    return (
      <>
        <div className="background-container" style={backgroundStyle}>
          <div className="text-overlay">
            <h1 className="title-details">{text}</h1>
            <p className="d-none d-sm-block text-bg">{description}</p>
            <button className="btn-bg-details" onClick={toggleItineraries}><i className="bi bi-arrow-down arrow-details"></i>
              View Itinerary
            </button>
          </div>
          <Anchor to={"/Cities"} className="btn btn-link-cities">
            <RotateLeft />
            Cities
          </Anchor>
        </div>
        {(country === undefined) ?(<div></div>):(<Features name={country.name} currency={country.currency} language={country.language}/>)}

        <div className="container-itineraries">
          {resultNotFound && showItineraries ? (
            <div className="bg-notFound-itineraries">
              <div className="row">
                <p className="message-itineraries">
                  
                  Oops! There are no itineraries for the selected city
                </p>
              </div>
            </div>
          ) : (
            <div
              className="itineraries"
              style={{ display: showItineraries ? "flex" : "none" }}
            >
              {itineraries.map((each) => (
                <CardItineraries
                  key={each._id}
                  title={each.name}
                  imageSrc={each.photo}
                  id={each._id}
                  content={
                      <ContenItineraries
                        user={each.city_id.admin_id.name}
                        photo={each.city_id.admin_id.photo}
                        alt={each.city_id.admin_id._id}
                        tags={each.tags}
                        duration={each.duration}
                        price={each.price}
                      />
                  }
                />
              ))}
            </div>
          )}
        </div>
      </>
    );
}


