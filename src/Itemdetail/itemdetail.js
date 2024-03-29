import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Itemcount from '../components/Itemcount'
import{useContext} from 'react'
import { Context } from '../components/Cartcontext'
import './detail.css'

const Itemdetail = ({producto}) => {
  const {agregarProducto, duplicado, cantidad1,} = useContext(Context)
  const[cantidad,setCantidad]= useState(0)
  const onAdd =(cantidad)=>{
    setCantidad(cantidad);
    agregarProducto(producto, cantidad);
    cantidad1(cantidad);
    
    console.log(`agregado al carrito: x${cantidad} ${producto.nombre}`)
    
  }
  
  return (
    <section className="detail">
        <img src={producto.image} alt={producto.nombre} />
        <div className="detail-card">
          <div className='d-flex justify-content-center align-items-center gap-4'>
            <h2>{producto.nombre}</h2>
            <span>${producto.price}</span>
          </div>
              <h4>Cantidad:{cantidad}</h4>
              {
              
               !duplicado(producto.id)  ? <Itemcount stock={producto.stock} initial={0} onAdd={onAdd}/> : <Link to='/carrito'><button className='btn btn-dark'>Terminar compra</button></Link>
              }
             
              <div className="description">
                <h3>Description:</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis inventore cumque reprehenderit laudantium. Nulla distinctio animi non nihil nobis excepturi modi totam sint quod assumenda error eveniet voluptas, doloremque sapiente.</p>
              </div>
        </div>
    </section>
  )
}

export default Itemdetail