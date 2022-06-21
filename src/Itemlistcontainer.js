import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import customFetch from "./utils/customFetch"
import productos, { getCategoryById } from "./utils/productos"
import Itemlist from "./Itemlist"
function Itemlistcontainer(){
    const[item, setItems] = useState([])
    const{category} = useParams();
    useEffect(()=>{
        if(!category){
            customFetch(500,productos)
            .then((resultado) => setItems(resultado))
        } else{getCategoryById(category)
            .then((resultado) => setItems(resultado))
        }
    }, [category])
    return(
        <div>
             <section className="boton">
                <button><Link to='/catalogo/Remeras'>Remeras</Link></button>
                <button><Link to='/catalogo/Pantalones'>Pantalones</Link></button>
                <button><Link to='/catalogo/Hoodies'>Hoodies</Link></button>
            </section>
            <div className="flex-1">
                <Itemlist producto={item} />
            </div>
            
        </div>
    )
}

export default Itemlistcontainer