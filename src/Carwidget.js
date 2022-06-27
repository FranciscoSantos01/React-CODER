import{useContext} from 'react'
import { Context} from './components/Cartcontext'
function Cart(){
  const carrito = useContext(Context)
    return(
      <i class="fa-solid fa-cart-shopping">{carrito.cantidad_total}</i>
    )
}

export default Cart