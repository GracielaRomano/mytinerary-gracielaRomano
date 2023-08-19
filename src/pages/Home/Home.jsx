import Carousel from "../../components/Carousel"
import { Link as Anchor } from "react-router-dom"
import './Home.css'

export default function Home() {
  return (
    <main className="main"> 
      <div className="container-home">
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="card card-home">
                  <div className="card-header card-header-home">
                    Find the perfect destination
                  </div>
                  <div className="card-body">
                    <p className="card-text card-text-home">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                    <p className="text-slogan">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
                    <Anchor to={'/Cities'} className="btn ov-btn-slide-left" >View More</Anchor>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5" >
                <h3 className="titulo-carousel">"Popular Mytineraries"</h3>
                <Carousel/>
              </div>
          </div>
      </div>
    </main>
  )
}

