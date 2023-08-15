import './Cities.css'
import { useState, useEffect } from 'react';
import axios from "axios";

import CardPolaroid from "../../components/CardPolaroid"

export default function Cities() {

  let [data, setData] = useState([]);

  useEffect(
    ()=>{
      axios('/data.json')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },
    []
  )

  return (
        <main className="container-cities" >
            <div className='banner'>
              <h3>Cities</h3>
              <p>Collection of the most beautiful places and experience</p>
            </div>
            <div>
              {data.slice(0, 4).map(each=><CardPolaroid key={each.id} src={each.photo} alt={each.id} text={each.city} id={each.id}/>)}
            </div>
        </main>
       
   
  )
}
