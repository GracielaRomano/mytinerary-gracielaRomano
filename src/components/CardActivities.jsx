import Card from 'react-bootstrap/Card';

export default function CardActivities({photo, name, id}) {
 
  return (
     <Card className='card-activities'>
      <Card.Img className='photo-activities'variant="top" src={photo} />
      <Card.Body>
        <Card.Title className='title-activities'>{name}</Card.Title>
      </Card.Body>
    </Card>
  )
}
