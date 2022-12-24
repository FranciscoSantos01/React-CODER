import React from 'react'
import Image1  from '../../Images/photo.webp'
import './contacto.css'
const Itemcontact = () => {
  return (
     <div className='bg'>
         <section className='forms'>
          <img src={Image1} alt="" />
         <form action="" class="form">
            <h2>Contactanos</h2>
             <input type="text" placeholder="UserName"/>
             <input type="email" name="" id="" placeholder="Email"/>
             <textarea name="info" id="" cols="40" rows="3" placeholder="Leave your message"></textarea>
            <button className='btn btn-dark btn-lg '>Submit</button>
        </form>
        </section>    
     </div>
 
  )
}

export default Itemcontact