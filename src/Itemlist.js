import React from 'react'
import { Items } from './item'


const Itemlist = ({producto}) => {
  return (
    producto.map(p =>
        <Items
        id={p.id}
        image= {p.image}
        nombre={p.nombre}
        price = {p.price}
        stock = {p.stock}
        />
        )
  )
}

export default Itemlist