import productos from "./productos";

const customFetch =(time, task) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(task);
        }, time)
    })
}

export const getProductById=(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod=> prod.id === id));
        }, 500)
    })
}


export default customFetch