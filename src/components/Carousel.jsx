import { useState, useEffect } from 'react';
import Arrows from '../components/Arrows';
import CardPolaroid from "../components/CardPolaroid";
import axios from "axios";
import apiUrl from '../apiUrl'

export default function Carousel() {
    
    let [counter, setCounter] = useState(0);
    let [counterTo, setCounterTo] = useState(4);
    let [data, setData] = useState([]);

    function next_slide() {
        if (data.length <= counterTo) {
          setCounter(0)
          setCounterTo(4)
        } else {
          setCounter(counter+4)
          setCounterTo(counterTo+4)
        }
    }
    function prev_slide() {
        if (counter <= 0) {
          setCounter(data.length-4)
          setCounterTo(data.length)
        } else {
          setCounter(counter-4)
          setCounterTo(counterTo-4)
        }
    }

    useEffect(
      ()=>{
        axios(apiUrl+'cities/carousel')
          //.then(res=>console.log(res.data.data_carousel))
          .then(res=>setData(res.data.data_carousel))
          .catch(err=>console.log(err))
      },
      []
    )
    

  return (
      <>
        <div className='container-carousel'>
            <Arrows direction="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" onClick={prev_slide} />
            <div className="carousel">
                {data.slice(counter, counterTo).map(each=> <CardPolaroid key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id}/>)}
            </div>
            <Arrows direction="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"onClick={next_slide} />
        </div>
      </>
  )
}


{/*<div className="card bg-dark text-white card-carousel ">
                    <img src={data[1].photo} alt={data[1].id}className="card-img" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{data[1].city}</h5>
                        <a href="#" className="btn btn-primary btn-card">Go</a>
                    </div>
                </div>
                <div className="card bg-dark text-white card-carousel ">
                    <img src={data[2].photo} alt={data[2].id} className="card-img"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">{data[2].city}</h5>
                        <a href="#" className="btn btn-primary btn-card">Go</a>
                    </div>
                </div>
                <div className="card bg-dark text-white card-carousel ">
                    <img src={data[3].photo} alt={data[3].id} className="card-img" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{data[3].city}</h5>
                        <a href="#" className="btn btn-primary btn-card">Go</a>
                    </div>
</div>*/}