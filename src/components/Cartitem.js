import React from 'react'
import{useContext} from 'react'
import { Context } from '../components/Cartcontext'
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
    <div key={producto.id}>
      <img src={producto.image} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <span>Total:{total()}</span> 
      <button onClick={()=>addDelete()}>Remove</button>
    </div>
  )
}

export default Cartitem