import './Cities.css'
import { useState, useEffect, useRef } from 'react';
import CardCities from "../../components/CardCities"
import NavBar from '../../components/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import cities_actions from '../../store/actions/cities';

const { read_cities} = cities_actions

export default function Cities() {
  const cities = useSelector(store=>store.cities.cities)
  const resultNotFound = useSelector(store => store.cities.resultNotFound); // Agregamos el estado para el resultado no encontrado
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch()

  useEffect(
    ()=>{
        dispatch(read_cities({ text:text.current?.value}));
    },[reEffect]
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