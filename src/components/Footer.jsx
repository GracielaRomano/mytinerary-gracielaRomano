import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
        <div className="container-footer">
            <div>
                <h2>Links</h2>
                <ul className="list-unstyled">
                    <li>
                        <a aria-current="page" href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Cities</a>
                    </li>
                </ul>
            </div>
            <div>
                <h1>DIRECCION</h1>
                
            </div>
            <div>
                <h1>MAPA</h1>
            </div>
           
        </div>
        <h3>REDES SOCIALES</h3>
                <FontAwesomeIcon icon={faFacebook} />

    </>
    
  )
}
