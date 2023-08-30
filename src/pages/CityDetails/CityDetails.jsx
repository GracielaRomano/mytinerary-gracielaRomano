import React, { useEffect } from 'react';
import Details from "../../components/Details"
import './CityDetails.css'
import { useParams } from 'react-router-dom';
import FooterCities from '../../components/FooterCities';
import { useDispatch, useSelector } from 'react-redux';
import cities_actions from '../../store/actions/cities';
import NavbarTransparent from '../../components/NavbarTransparent';

const { read_city} = cities_actions

export default function CityDetails() {
  const { city_id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(read_city({ id: city_id }))
  }, [])

  const city = useSelector(store=> store.cities.city)
  return (
    <>
      <NavbarTransparent/>
      <Details src={city.photo} alt={city._id} text={city.city} id={city_id} description={city.smalldescription}/>
      <FooterCities/>
    </>
  )
}
