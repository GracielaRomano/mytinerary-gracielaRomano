import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import Activities from './Activities'
import Coin from './Coin';

export default function ContenItineraries({user, photo, alt, tags, duration, price, id}) {
    const [showActivities, setShowActivities] = useState(false);
    const toggleContent=()=> {
        setShowActivities(!showActivities)
    }
    const oprice = Array.from({ length: price }, (_, index) => ({ valor: 0 }));
    const resultNotFound = useSelector(store => store.activities.resultNotFound);

  return (
   <Container className='align-text'>
        <Row >
            <Col xs={6} md={2} lg={2}>
                <h6>User</h6>
                <div>
                    <img className='img-content' src={photo} alt={alt} />
                    <p>{user}</p>
                </div>
            </Col>
            <Col xs={6} md={4} lg={4}>
                <h6 >Hashtags</h6>
                <p className='paragraf-tags'>{tags}</p>
            </Col>
            <Col xs={6} md={2} lg={2}>
                <h6>Duration</h6>
                <p>{duration}Hs.</p>
            </Col>
            <Col xs={6} md={4} lg={4}>
                <h6>Price</h6>
                <div>
                {oprice.map((each, index) => (
                    <Coin key={index} /> 
                ))}
                </div>
                Usd
            </Col>
        </Row>
        <button className="btn-bg-content" onClick={toggleContent}> View More</button>
        <>
        {resultNotFound && showActivities  ? (
            <div className="bg-notFound-activities">
              <div className="row">
                <p className="message-activities">
                  
                  Oops! There are no activities for the selected itinerary
                </p>
              </div>
            </div>
            ) : (

                <div
                  className="itineraries"
                  style={{ display: showActivities ? "flex" : "none" }}>
                 <Activities itinerary_id = {id} />
                  {/* {activities.map(each => <Activities key={each._id} photo={each.photo} name={each.name} id={each._id}/>)} */}
                </div>
            )}
        </>
    </Container>
  )
}
