import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from "./components/Firebase";
import Itemlist from "./Itemlist"
function Itemlistcontainer(){
    const[item, setItems] = useState([])
    const{category} = useParams();
    useEffect(()=>{
        const ref = category
        ? query(collectionProd, where('category','==', category))
        : collectionProd;
        getDocs(ref).then((response)=>{
          const products = response.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data()
    
            };
          });
          setItems(products);
        })
    
      }, [category] )
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