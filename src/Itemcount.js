import {useState} from "react"
const Itemcount = ({stock, initial, onAdd}) =>{
    const[contador, setContador]= useState(initial)
    const aumentarcontador = () =>{
        if(contador < stock){  
        setContador(contador + 1)
        }
    }
    const disminuircontador = () =>{
        if(contador > 0){
            setContador(contador - 1)
        }
    }
    const confirmarcontador = () =>{
        onAdd(contador);
    }

    return(
        <>
        <div className="counter">
            <div className="counter1">
            <button onClick={aumentarcontador}>+</button>
            <h2>{contador}</h2>
            <button onClick={disminuircontador}>-</button>
            </div>
            <div>
                <button onClick={confirmarcontador}>Agregar Carrito</button>
            </div>
        </div>
        </>
    )
}
export default Itemcount