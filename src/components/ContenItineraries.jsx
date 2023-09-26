import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState} from "react";
import { useSelector} from 'react-redux';
import Activities from './Activities'
import Coin from './Coin';
import Comments from './Comments';
import SendComment from './SendComment';

export default function ContenItineraries({user, photo, alt, tags, duration, price, id}) {
    const currentUser = useSelector((store) => store.users.user);
    const [showActivities, setShowActivities] = useState(false);
    
    const toggleContent=()=> {
        setShowActivities(!showActivities)
    }
    const oprice = Array.from({ length: price }, (_, index) => ({ valor: 0 }));

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
        <button className="btn-bg-content" onClick={toggleContent}>
             View Activities</button>
        <>
            {
                <>
                <div
                    className="showactivities"
                    style={{ display: showActivities ? "flex" : "none" }}>
                    <Activities p_activities = {id} />

                    <h6 className='title-comments'>Comments</h6>
                    <Comments p_itinerary_id = {id} currentUser = {currentUser} /> 
                </div> 
                
                </>
            }
        </>
        <>
        { Object.keys(currentUser).length > 0 ? (
            <SendComment p_itinerary_id = {id} currentUser = {currentUser}/>
        ):(
            <div></div>
        )

        }
</>
        
        
    </Container>
  )
}
