import React from 'react'
import{useContext} from 'react'
import { Context } from '../Cartcontext'
import './cart.css'
const Cartitem = ({producto}) => {
  const{eliminarProduct}= useContext(Context)
  const total = ()=>{
    let precio = producto.price * producto.cantidad;
    

    return precio
  }
  const addDelete = ()=>{
    let precio = producto.price * producto.cantidad;
    eliminarProduct(producto.id, producto.cantidad, precio);
    
  }
 
  
  return (
    <div key={producto.id} className="cartItem">
      <img src={producto.image} alt={producto.nombre} />
      <div>
      <h3>{producto.nombre}</h3>
      <span>Total:{total()}</span> 
      <button onClick={()=>addDelete()} className="btn btn-danger w-75"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default Cartitem