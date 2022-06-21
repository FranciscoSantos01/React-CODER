import React from 'react'
import { getProductById } from '../utils/customFetch';
import { useState, useEffect  } from 'react';
import {useParams} from 'react-router-dom';
import Itemdetail from '../Itemdetail/itemdetail';


const Itemdetailcontainer = () => {
  const[product, setProduct] = useState([]);
  let { id } = useParams();
  useEffect(()=>{
    getProductById(parseInt(id))
    .then(response => {setProduct(response)})
  }, [id] )

  return(
    <div>
      <Itemdetail producto={product}/>
    </div>
  )
}

export default Itemdetailcontainer