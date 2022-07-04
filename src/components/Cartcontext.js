import { useState } from 'react'
import {createContext} from 'react'
export const Context = createContext()
const Provider = Context.Provider

export const Contexto = ({children})=>{
    const[carrito,setCarrito] = useState([])
    const[cantidad ,setCantidad]= useState(0)
    const[cantidad_total, setAmount] = useState(0)
    
    const agregarProducto = (producto, cantidad)=>{
       
        const carritoSpread = [...carrito];

        const newProduct = {
            ...producto,
               cantidad
        }

        carritoSpread.push(newProduct);

        setCarrito(carritoSpread)
        setCantidad(newProduct.cantidad)
    }
    const duplicado = (id)=>{
       return carrito.some((prod)=>prod.id === id)
        
    }
    const cantidad1 = (cantidad)=>{
        setAmount(cantidad)
    }
    const eliminarProduct = (id) =>{
        setCarrito(carrito.filter((prod)=> prod.id !== id));
    }
        
    const vaciarCarrito = ()=>{
        const cart =  []
        setCarrito(cart);
    }
    
    const Carro = {
        carrito,
        cantidad_total,
        precio_total: 0,
        agregarProducto,
        duplicado,
        cantidad1,
        eliminarProduct,
        vaciarCarrito
        
    }
    console.log(carrito)
    
return(
    <Provider value={Carro}>
     {children}
    </Provider>
)
}
