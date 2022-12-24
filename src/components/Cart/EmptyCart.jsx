import React from 'react'
import Image1 from '../../Images/scout1.PNG'
import {Link} from 'react-router-dom'
export const EmptyCart = () => {
  return (
    <>
    <div className='empty'>
    <img src={Image1} alt=""  style={{}}/>
     <h3>No hay productos en el carrito</h3>
     <Link to='/catalogo'> <button className='btn btn-primary'><i class="fa-solid fa-shop"></i> Go back</button></Link>
    </div>
    </>
  )
}
