import Cart from "./Carwidget"
import {Link} from 'react-router-dom'

function Header (){
    return(
        <header>
            <div className="Title">
                <h1>Africa Clothing</h1>

            </div>
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/catalogo'>Catalogo</Link>
                <Link to='contacto'>Contact</Link>
                
            </div>
            <div className="navbutt">
                <Cart />
            </div>
        </header>
    )
}

export default Header