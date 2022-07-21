import { useState } from 'react'
import {createContext} from 'react'
export const Context = createContext()
const Provider = Context.Provider

export const Contexto = ({children})=>{
    const[carrito,setCarrito] = useState([])
    const[cantidad ,setCantidad]= useState(0)
    const[cantidad_total, setAmount] = useState(0)
    const[precio_total, setPrecio] = useState(0)
    
    
    const agregarProducto = (producto, cantidad)=>{
       
        const carritoSpread = [...carrito];

        const newProduct = {
            ...producto,
               cantidad
        }

        carritoSpread.push(newProduct);

        setCarrito(carritoSpread)
        setCantidad(newProduct.cantidad)
        setPrecio( precio_total + newProduct.price * newProduct.cantidad);
    }
    const duplicado = (id)=>{
       return carrito.some((prod)=>prod.id === id)
        
    }
    const cantidad1 = (cantidad)=>{
        let total = cantidad + cantidad_total;
        setAmount(total)
    }
    const eliminarProduct = (id,cantidad, price) =>{
        setCarrito(carrito.filter((prod)=> prod.id !== id));
        setAmount(cantidad_total - cantidad);
        setPrecio(precio_total - price);
    }
        
    const vaciarCarrito = ()=>{
        const cart =  []
        setCarrito(cart);
        setAmount(0);
        setPrecio(0);
    }
   
  
    
    const Carro = {
        carrito,
        cantidad_total,
        precio_total,
        agregarProducto,
        duplicado,
        cantidad1,
        eliminarProduct,
        vaciarCarrito,
       
        
        
    }
  
    
return(
    <Provider value={Carro}>
     {children}
    </Provider>
)
}
