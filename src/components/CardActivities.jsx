import Card from 'react-bootstrap/Card';

export default function Activities(photo, name, id) {
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  )
}
