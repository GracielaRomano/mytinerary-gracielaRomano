

export default function Arrows({direction, onClick}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="arrow" onClick={onClick}><path d={direction}/></svg>
  )

}

