

export default function CardPolaroid({src, alt, text}) {
  return (
        <div className="card bg-dark text-white card-carousel " >
            <img src={src} alt={alt} className="card-img"/>
            <div className="card-img-overlay">
                <h5 className="card-title">{text}</h5>
                <a href="#" className="btn btn-primary btn-card">Go</a>
            </div>
        </div>
  )
}
