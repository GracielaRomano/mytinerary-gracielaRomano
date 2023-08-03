import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import CardPolaroid from "../components/CardPolaroid";

export default function Carousel() {
    let data = [
        {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
        {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
        {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
        {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
        {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
        {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
        {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
        {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
        {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
        {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
        {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
        {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
        {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
        {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
        {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
        {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
    ]
  return (
    
   <>
        <div className='contenedor'>
            <FontAwesomeIcon icon={faChevronLeft} className='arrow' />
            <div className="container-carousel">
                {data.slice(0,4).map(each=> <CardPolaroid key={each.id} src={each.photo} alt={each.id} text={each.city}/>)}
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
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