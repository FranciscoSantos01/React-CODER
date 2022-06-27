import React from 'react'
//import { useState } from 'react'
//import {Link} from 'react-router-dom'
import Itemcount from '../Itemcount'
import{useContext} from 'react'
import { Context } from '../components/Cartcontext'

const Itemdetail = ({producto}) => {
 //const[cantidad,setCantidad]= useState(0)
 const {agregarProducto, duplicado} = useContext(Context)
  const agregarcarrito =()=>{
    const item = {
      ...producto,
    }
    agregarProducto(item)
  }
  
  return (
    <section class="detail">
        <img src={producto.image} alt={producto.nombre} />
        <div class="detail-card">
            <h2>{producto.nombre}</h2>
            <span>${producto.price}</span>
            <label for="size">Talle:</label>
            <select id="size" name="size">
                <option value="volvo">S</option>
                <option value="saab">M</option>
                <option value="fiat">L</option>
              </select>
              
              {
               !duplicado(producto.id)? <Itemcount stock={producto.stock} initial={0} onAdd={agregarcarrito}/> : <button>Terminar compra</button>
              }
             
              <div class="description">
                <h3>Description:</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis inventore cumque reprehenderit laudantium. Nulla distinctio animi non nihil nobis excepturi modi totam sint quod assumenda error eveniet voluptas, doloremque sapiente.</p>
              </div>
        </div>
    </section>
  )
}

export default Itemdetail