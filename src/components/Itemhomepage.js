import React from 'react'
import {Link} from 'react-router-dom'

const Itemhomepage = () => {
  return (
    <div>
        <section className="intro">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPCzKfid36sS9NwQNAn3bLk66VkkDxCzFyQ&usqp=CAU" alt="logo"/>
        <div className="intro-2">
            <h2>Welcome To Africa Clothes E-commerce</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi itaque, eos, adipisci ipsum quidem ipsam at accusantium ad commodi eveniet alias? Deserunt impedit a nesciunt velit recusandae rem nihil totam.</p>
            <Link to={'/catalogo'}><button>Start Shooping</button></Link>
        </div>
    </section>

    </div>
  )
}

export default Itemhomepage