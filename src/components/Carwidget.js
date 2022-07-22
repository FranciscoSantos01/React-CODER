import{useContext} from 'react'
import { Context} from './Cartcontext'
import {Link} from 'react-router-dom'
function Cart(){
  const {cantidad_total} = useContext(Context)

    return(
      <Link to={'/carrito'}><i className="fa-solid fa-cart-shopping">{cantidad_total}</i></Link>
    )
}

export default Cart