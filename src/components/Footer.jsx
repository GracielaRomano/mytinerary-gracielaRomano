import { Col, Container, Row } from "react-bootstrap";
import Iframe from 'react-iframe'
import facebook from "/img/facebook2.svg";
import instagram from "/img/instagram.svg";
import twitter from "/img/twitter.svg"

export default function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row >
                <Col sm={12} lg={4}>
                <h4>Links</h4>
                <ul className="list-unstyled">
                    <li >
                        <a className="links-footer" aria-current="page" href="#">Home</a>
                    </li>
                    <li >
                        <a className="links-footer" href="#">Cities</a>
                    </li>
                </ul>
                </Col>
                <Col sm={12} lg={4} >
                    <div>
                        <h4>Address</h4>
                        <p>Miami, Florida, EE.UU.</p>
                        <p>Phone: 111256987</p>
                    </div>
                    <div className="social-icon">
                        <a href=""><img src ={facebook} /></a>
                        <a href=""><img src ={twitter} /></a>
                        <a href=""><img src ={instagram} /></a>
                    </div>
                    
                </Col>
                <Col sm={12} lg={4}>
                    <h4>Location</h4>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93264.74430397416!2d-80.31426572748893!3d25.757870083618943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1691358126326!5m2!1ses-419!2sar"className="iframe"></Iframe>
                </Col>
            </Row>
            <div>
                <p> © Copyright 2023. All Rights Reserved</p>
            </div>
        </Container>
    </footer>
  )
}

 