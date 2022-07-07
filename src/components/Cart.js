import React, { useState } from 'react'
import{useContext} from 'react'
import { Context } from '../components/Cartcontext'
import Cartitem from './Cartitem'
import {Link} from 'react-router-dom'
import { db } from './Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Form from './Form'
//import Form from './Form'


const Cart = () => {
  const {carrito, vaciarCarrito} = useContext(Context)
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
        phone: data.phone,
        email: data.email,
    },
    carrito,
    date: serverTimestamp(),
};

const ref = collection(db, 'orders');
addDoc(ref, objOrden).then((response) => {
    setOrderId(response.id);
    vaciarCarrito();
});
};
if (orderId !== '') {
  return <h1>Gracias por tu compra, tu número de envío es: {orderId}</h1>;
}
return(
  <>
  {carrito.length === 0 ? ( <div>
      <h1>NO hay ningun producto todavia</h1>
      <Link to={'/catalogo'}>Vovler al Catalogo</Link>
      </div>):(
         <>
         <section className='carrito'>
      {
        carrito.map((item)=><Cartitem producto={item}/>)
      }
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
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