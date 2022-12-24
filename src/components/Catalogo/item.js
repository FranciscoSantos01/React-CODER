
import React from 'react'
import {Link} from 'react-router-dom'

export const Items = ({id,image ,nombre, price,stock}) => {
  return (
      <>
     
    <div className="card" key={id}>
        <img src={image} alt={nombre} />
        <div className="card-1">
        <h3>{nombre}</h3>
        <span>${price}</span>
        </div>
        <button><Link  to={`/detail/${id}`}>View details</Link></button>
        <h6>Stock:{stock}</h6>      
    </div>
    
    </>
  )
}

