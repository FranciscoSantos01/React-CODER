
import React from 'react'

export const Items = ({id,image ,nombre, price,stock}) => {
  return (
      <>
    <div class="card" key={id}>
        <img src={image} alt={nombre} />
        <div class="card-1">
        <h3>{nombre}</h3>
        <span>${price}</span>
        </div>
        <button>View details</button>
        <h6>Stock:{stock}</h6>      
    </div>
    </>
  )
}

