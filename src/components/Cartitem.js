import React from 'react'
import{useContext} from 'react'
import { Context } from '../components/Cartcontext'
const Cartitem = ({producto}) => {
  const{eliminarProduct}= useContext(Context)
 
  
  return (
    <div key={producto.id}>
      <img src={producto.image} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <span>Total:{producto.price * producto.cantidad}</span> 
      <button onClick={()=>eliminarProduct(producto.id)}>Remove</button>
    </div>
  )
}

export default Cartitem