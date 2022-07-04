import React from 'react'
//import { getProductById } from '../utils/customFetch';
import { getDoc, doc } from 'firebase/firestore';
import { collectionProd } from '../components/Firebase';
import { useState, useEffect  } from 'react';
import {useParams} from 'react-router-dom';
import Itemdetail from '../Itemdetail/itemdetail';


const Itemdetailcontainer = () => {
  const[product, setProduct] = useState([]);
  let { id } = useParams();
  useEffect(()=>{
    const ref = doc(collectionProd, id);
    getDoc(ref).then((response)=>{
      setProduct({
        id: response.id,
        ...response.data()
      });
    });
  }, [id] )

  return(
    <div>
      <Itemdetail producto={product}/>
    </div>
  )
}

export default Itemdetailcontainer