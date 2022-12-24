import React from 'react'
import { getDoc, doc } from 'firebase/firestore';
import { collectionProd } from '../components/Firebase';
import { useState, useEffect  } from 'react';
import {useParams} from 'react-router-dom';
import Itemdetail from '../Itemdetail/itemdetail';
import { SkeletonCard } from '../utils/Product_loader';


const Itemdetailcontainer = () => {
  const[product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  let { id } = useParams();
  useEffect(()=>{
    setLoading(true)
    const ref = doc(collectionProd, id);
    getDoc(ref).then((response)=>{
      setProduct({
        id: response.id,
        ...response.data()
      });
      setLoading(false);
    });
  }, [id] )

  return(
    <>
      {loading ? <SkeletonCard /> : <Itemdetail producto={product}/>}
    </>
  )
}

export default Itemdetailcontainer