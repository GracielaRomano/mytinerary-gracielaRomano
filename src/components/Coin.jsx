import React from 'react'

export default function Coin({ price, id }) {
   
    const quantity = (price>5) ?5 : price
    let money = [];
    for (let loop = 0; loop< quantity; loop++) {
        money.push(<i className="bi bi-coin" ></i>)
    }
  return (
    <div>
        {money.id} usd
    </div>
  )
}
