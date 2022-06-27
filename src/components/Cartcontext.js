import { useState } from 'react'
import {createContext} from 'react'
export const Context = createContext()
const Provider = Context.Provider

export const Contexto = ({children})=>{
    const[carrito,setCarrito] = useState([])
    //const[cantidad_total, setCantidad]= useState(0)
    
    const agregarProducto = (producto)=>{
        const cart = carrito.slice();
        cart.push(producto);
        setCarrito(cart)


    }
    const duplicado = (id)=>{
       return carrito.some((prod)=>prod.id === id)
        
    }
    
    
    const Carro = {
        carrito,
        //cantidad_total,
        precio_total: 0,
        agregarProducto,
        duplicado
        
    }
    console.log(carrito)
    
return(
    <Provider value={Carro}>
     {children}
    </Provider>
)
}
