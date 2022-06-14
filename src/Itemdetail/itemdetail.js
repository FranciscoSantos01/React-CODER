import React from 'react'
import Itemcount from '../Itemcount'

const Itemdetail = ({product}) => {
  return (
    <div className='detail'>
        <img src={product.image} alt={product.name} />
        <div>
            <h1>{product.nombre}</h1>
            <h2>${product.price}</h2>
            <h3>{product.description}</h3>
            <h4>Stock:{product.stock}</h4>
            <Itemcount stock={product.stock} initial={1}/>

        </div>
    </div>
  )
}

export default Itemdetail