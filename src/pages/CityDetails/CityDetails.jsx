import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../apiUrl'
import Details from "../../components/Details"
import './CityDetails.css'
import { useParams } from 'react-router-dom';
import { Link as Anchor } from "react-router-dom"
import RotateLeft from '../../components/RotateLeft';
import FooterCities from '../../components/FooterCities';

export default function CityDetails() {
  const [cityData, setCityData] = useState({});
  const { city_id } = useParams();

  useEffect(() => {
    axios.get(`${apiUrl}/cities/${city_id}`)
      .then(res => {
        setCityData(res.data.response);
      })
      .catch(error => {
        console.error("Error fetching city data:", error);
      });
  }, [city_id]);

  

  const { _id, photo, city, smalldescription } = cityData;
  return (
    <>
      <Details src={photo} alt={_id} text={city} id={_id} description={smalldescription}/>
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
