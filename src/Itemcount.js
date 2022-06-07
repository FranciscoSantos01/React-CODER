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
        alert('AGREGADO AL Carrito')
    }

    return(
        <>
        <div className="counter">
            <div className="counter1">
            <button onClick={aumentarcontador}>Aumentar</button>
            <h2>Contador: {contador}</h2>
            <button onClick={disminuircontador}>Disminuir</button>
            </div>
            <div>
                <button onClick={confirmarcontador}>Agregar Stock</button>
            </div>
        </div>
        </>
    )
}
export default Itemcount