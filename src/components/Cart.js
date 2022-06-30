import React from 'react'
import{useContext} from 'react'
import { Context } from '../components/Cartcontext'
import Cartitem from './Cartitem'
import {Link} from 'react-router-dom'

const Cart = () => {
  const {carrito} = useContext(Context)
  if(carrito.length === 0){
    return(
      <div>
      <h1>NO hay ningun producto todavia</h1>
      <Link to={'/catalogo'}>Vovler al Catalogo</Link>
      </div>

    )
  }
  return (
    <section>
      {
        carrito.map((item)=><Cartitem producto={item}/>)
      }
    </section>
  )
}

export default Cart