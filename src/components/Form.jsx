import React from 'react'

const Form = ({handleChange, data, handleSubmit}) => {
  return (
    <div className='form'>
         <form onSubmit={handleSubmit}>
                <input
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value = {data.name}
                    required
                   
                /> <br />
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value = {data.email}
                    required
                   
                   
                /> <br />
                <input
                    placeholder="Telefono"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value = {data.phone}
                    required
                   
                   
                /> <br />
                <button>Finalizar compra</button>
            </form>
    </div>
  )
}

export default Form