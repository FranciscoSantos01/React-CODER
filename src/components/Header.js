import Cart from "./Carwidget"
import {Link} from 'react-router-dom'
import { useState } from "react"

function Header (){
    const[open,setOpen]=useState(true)
    const openMenu = ()=>{
        if (open === false) {
            setOpen(true);
          } else if (open === true) {
            setOpen(false);
          }
    }
    return(
        <header>
            <nav className="header">
            <div className="Title">
                <Link to='/'><h1>Africa Clothing</h1></Link>
            </div>
            <div className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/catalogo'>Catalogo</Link>
                <Link to='contacto'>Contact</Link>
                <Cart />
            </div>
             <div className="nav2">
            <i onClick={openMenu} className={open ? "fa-solid fa-bars" : 'd-none'}></i>
            <p onClick={openMenu} className={ !open ?'d-block text-white fw-bold fs-1' : 'd-none'}>X</p>
            </div>
            </nav>
             <div className={open ? 'd-none':'nav1' }>
                <Link to='/' className="fs-3">Home</Link>
                <Link to='/catalogo' className="fs-3">Catalogo</Link>
                <Link to='contacto' className="fs-3">Contact</Link>
                <Cart />
            </div> 
        </header>
    )
}

export default Header