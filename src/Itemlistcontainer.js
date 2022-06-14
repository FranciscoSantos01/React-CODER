import React, { useEffect, useState } from "react"

import customFetch from "./utils/customFetch"
import productos from "./utils/productos"
import Itemlist from "./Itemlist"
function Itemlistcontainer({greetings}){
    const[item, setItems] = useState([])
    useEffect(()=>{
        customFetch(3000,productos)
        .then((resultado) => setItems(resultado))
    }, [item])
    return(
        <div>
            <h2>{greetings}</h2>
            
            <div>
                <Itemlist producto={item} />
            </div>
            
        </div>
    )
}

export default Itemlistcontainer