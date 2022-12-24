import React, { useState } from 'react'
import{useContext} from 'react'
import { Context } from './Cartcontext'
import Cartitem from './Cart/Cartitem'
import {Link} from 'react-router-dom'
import { db } from './Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Form from './Form'
import { EmptyCart } from './Cart/EmptyCart'
//import Form from './Form'


const Cart = () => {
  const {carrito, vaciarCarrito, precio_total} = useContext(Context)
  const [data , setData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value,
    });
};
const handleSubmit = (e)=>{
  e.preventDefault();
  const objOrden = {
    buyer: {
        name: data.name,
        email: data.email,
        phone: data.phone,
    },
    carrito,
    precio_total,
    date: serverTimestamp(),
};

const ref = collection(db, 'orders');
addDoc(ref, objOrden).then((response) => {
    setOrderId(response.id);
    vaciarCarrito();
});
};
if (orderId !== '') {
  return (
  <div className='confirm'>
  <h2>Tu compra fue exitosa</h2>
  <i className="fa-solid fa-circle-check"></i>
  <h3>tu número de envío es: <span>{orderId}</span></h3>;
  <Link to={'/'}><button className='btn btn-danger btn-lg'>Volver a inicio<i className="fa-solid fa-house"></i></button></Link>
  </div>
  )
}
return(
  <>
  {carrito.length === 0 ? (<EmptyCart /> ):(
         <>
         <section className='carrito'>
      {
        carrito.map((item)=><Cartitem producto={item}/>)
      }      
    </section>
    <section className='d-flex justify-content-center align-items-center'>
      <div>
      <h3>Monto:${precio_total}</h3>
      <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito <i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    </section>
    <section >
    <Form
     handleChange={handleChange}
     data={data}
     handleSubmit={handleSubmit}
     />
     </section>
         </>
      )}
      </>
)
  
}


export default Cart