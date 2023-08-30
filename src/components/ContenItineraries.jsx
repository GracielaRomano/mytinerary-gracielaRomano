import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Activities from './Activities'
import Coin from './Coin';


export default function ContenItineraries({user, photo, alt, tags, duration, price,id}) {
    const [showActivities, setShowActivities] = useState(false);
    const toggleContent=()=> {setShowActivities(!showActivities)}
    
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
                <Coin key={id} price={price}/>
            </Col>
        </Row>
        <button className="btn-bg-content" onClick={toggleContent}> View More</button>
        <>
            {showActivities? (<Activities/>): ('')}
        </>
    </Container>
        
    
  )
}
