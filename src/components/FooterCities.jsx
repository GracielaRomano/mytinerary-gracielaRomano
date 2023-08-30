import { Col, Container, Row } from "react-bootstrap";
import facebook from "/img/facebook2.svg";
import instagram from "/img/instagram.svg";
import twitter from "/img/twitter.svg";
import { Link as Anchor } from "react-router-dom"

export default function FooterCities() {
  return (
    <footer className="footer-cities">
        <Container>
            <Row >
                <h2 className="title-footer-cities">MyTinerary</h2>
                <Col sm={12} md={4} lg={4}>
                    <ul className="list-unstyled">
                        <li>
                            <Anchor to={'/'} className="links-footer">Home</Anchor>
                        </li>
                        <li>
                            <Anchor to={'/Cities'} className="links-footer">Cities</Anchor>
                        </li>
                    </ul>
                </Col>
                <Col sm={12} md={4} lg={4} >
                    <div className="address">
                        <i className="bi bi-journal-text"></i>  Miami, Florida, EE.UU.<br></br>
                        <i className="bi bi-telephone-inbound-fill">    111256987</i>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <div className="social-icon-cities">
                        <a href=""><img src ={facebook} /></a>
                        <a href=""><img src ={twitter} /></a>
                        <a href=""><img src ={instagram} /></a>
                    </div>
                </Col>
            </Row>
            <div>
                <p className="footer-paragraf"> © Copyright 2023. All Rights Reserved</p>
            </div>
        </Container>
    </footer>
  )
}
