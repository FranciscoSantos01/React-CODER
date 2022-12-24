import React from 'react'
import {Link} from 'react-router-dom'

const Itemhomepage = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' >
        <section className="intro">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPCzKfid36sS9NwQNAn3bLk66VkkDxCzFyQ&usqp=CAU" alt="logo"/>
        <div className="intro-2">
            <h2>Welcome To Africa Clothes E-commerce</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi itaque, eos, adipisci ipsum quidem ipsam at accusantium ad commodi eveniet alias? Deserunt impedit a nesciunt velit recusandae rem nihil totam.</p>
            <div>
            <Link to={'/catalogo'}><button className='btn btn-dark btn-lg w-100'>Start Shooping <i class="fa-solid fa-bag-shopping"></i></button></Link>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Itemhomepage