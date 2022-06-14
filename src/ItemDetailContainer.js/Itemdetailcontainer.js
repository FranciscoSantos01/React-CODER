import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Itemdetail from '../Itemdetail/itemdetail';
import customFetch from '../utils/customFetch';
import { producto } from '../utils/productos';

const Itemdetailcontainer = () => {
    const[product,setProduct] = useState([]);
    useEffect(()=>{
        customFetch(1000,producto)
        .then((resultado)=>setProduct(resultado))
    },[product])
  return (
    <Itemdetail product={product}/>
  )
}

export default Itemdetailcontainer