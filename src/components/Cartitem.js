import React from 'react'
import{useContext} from 'react'
import { Context } from '../components/Cartcontext'
const Cartitem = ({producto}) => {
  const{eliminarProduct, carrito}= useContext(Context)
  const eliminar=()=>{
    if(carrito.length > 0){
    eliminarProduct(producto.name)
  }
  }
  
  return (
    <div key={producto.id}>
      <img src={producto.image} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <span>Total:{producto.price * producto.cantidad}</span> 
      <button onClick={eliminar}>Remove</button>
    </div>
  )
}

export default Cartitem