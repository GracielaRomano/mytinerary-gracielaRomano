import './Cities.css'
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import CardCities from "../../components/CardCities"
import NavBar from '../../components/NavBar';
import apiUrl from '../../apiUrl'


export default function Cities() {
  const [cities, setCities] = useState([]);
  const [reEffect, setReEffect] = useState(true);
  const [resultNotFound, setResultNotFound] = useState(false); // Agregamos el estado para controlar si el resultado no se encontró
  const text = useRef();

  useEffect(
    ()=>{
      axios(apiUrl+'cities?city='+text.current.value)
        .then(res => {
          setCities(res.data.response);
          setResultNotFound(false); // Reiniciamos el estado si se recibe una respuesta exitosa
        })
        .catch(err => {
          if (err.response && err.response.status === 404) {
            setResultNotFound(true); // Cambiamos el estado si se recibe un error 404
          }
          console.log(err);
        });
    },
    [reEffect]
  );

  function filter() {
    setReEffect(!reEffect);
  }

  return (
    < >
      <NavBar />
      <div className='banner'>
        <h3 className='title-cities'>Cities</h3>
        <p className='paragraph-cities'>Collection of the most beautiful places and experience</p>
      </div>
      <div className="container-cities">
        <form>
          <input ref={text} type="text" name="search" placeholder="Search your city" className='search' onKeyUp={filter} />
        </form>
        <div className='cities' style={{ display: resultNotFound ? "none" : "flex" }}>
          {cities.map(each => <CardCities key={each._id} src={each.photo} alt={each._id} text={each.city} loc={each.country} id={each._id} />)}
        </div>
        <div className='bg-notFound' style={{ display: resultNotFound ? "block" : "none" }}>
          <div className="row" id="NotFound" style={{ display: resultNotFound ? "block" : "none" }}>
            <p className="message"> Oops! We did not find the city you are looking for</p>
          </div>
        </div>
      </div>
    </>
  )
}