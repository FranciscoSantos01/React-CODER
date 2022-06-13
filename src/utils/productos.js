const productos = [
    {
        id:1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1LcEo6dhvSAysHmP6W1N5dXvlN5g86KqGA&usqp=CAU",
        nombre: "T-Shirt",
        price: 20,
        stock: 6,
    },
    {
        id:2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZ25ZVbi2snB8XXtnIfazZxIQCaY03FhEHA&usqp=CAU",
        nombre: "Green T-Shirt",
        price: 25,
        stock: 10,
    },
    {
        id:3,
        image: "data:image/jpeg;base64,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",
        nombre: "Black T-shirt",
        price: 22,
        stock: 4,

    }
]

export default productos