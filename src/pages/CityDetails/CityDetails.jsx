import React, { useEffect } from 'react';
import Details from "../../components/Details"
import './CityDetails.css'
import { useParams } from 'react-router-dom';
import { Link as Anchor } from "react-router-dom"
import RotateLeft from '../../components/RotateLeft';
import FooterCities from '../../components/FooterCities';
import { useDispatch, useSelector } from 'react-redux';
import cities_actions from '../../store/actions/cities';
import NavbarTransparent from '../../components/NavbarTransparent';

const { read_city} = cities_actions

export default function CityDetails() {
  const { city_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(read_city({ id:city_id}))
  }, [])

  const city = useSelector(store=> store.cities.city)
  return (
    <>
      <NavbarTransparent/>
      <Details src={city.photo} alt={city._id} text={city.city} id={city._id} description={city.smalldescription}/>
      <Anchor to={'/Cities'} className="btn btn-link-cities" >
        <RotateLeft />
        Cities
      </Anchor>
      <div className='box-itineraries'>
        <img className="not-itineraries" src="/public/img/not-itineraries.png" alt="Not itineraries" />
      </div>
      <FooterCities/>
    </>
  )
}
