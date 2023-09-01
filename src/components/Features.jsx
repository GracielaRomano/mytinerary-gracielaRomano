import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Features({name, currency, language}) {
  return (
    <Container className='container-feature'>
        <Row>
            <Col xs={12} md={4} lg={4}>
                <div className='currency'>
                    <img className="img-feature" src="../img/currency2.jpg" id="logo" alt="Currency" />
                    <h6 className='titulo-features'>Currency: {currency}</h6>
                </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
                <div className='country'>
                    <img className="img-feature" src="../img/world2.jpg" id="logo" alt="Currency" />
                    <h6 className='titulo-features'>Country: {name}</h6>
                </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
                <div className='languages'>
                    <img className="img-feature" src="../img/language2.jpg" id="logo" alt="Currency" />
                    <h6 className='titulo-features'>Language: {language}</h6>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
