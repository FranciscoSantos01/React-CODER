import React from 'react'

const Form = ({handleChange, data, handleSubmit}) => {
  return (
    <div className='d-flex justify-content-center mt-3' >
         <form onSubmit={handleSubmit}>
                <input
                   className='form-control w-100'
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value = {data.name}
                    required
                   
                /> <br />
                <input
                  className='form-control  w-100'
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value = {data.email}
                    required
                   
                   
                /> <br />
                <input
                  className='form-control w-100'
                    placeholder="Telefono"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value = {data.phone}
                    required
                   
                   
                /> <br />
                <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-dark'>Finalizar compra</button>
                </div>
            </form>
    </div>
  )
}

export default Form