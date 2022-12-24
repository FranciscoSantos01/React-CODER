import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./Header"
import Itemdetailcontainer from "../ItemDetailContainer.js/Itemdetailcontainer"

import { Contexto} from './Cartcontext'
import Cart from "./Cart"
import Footer from "./Footer"
import { Home, Catalogo, Contact } from "../screens"
//import productos from "./utils/productos"
//import { addDoc } from "firebase/firestore"
//import { collectionProd } from "./components/Firebase"

//productos.map((product)=> addDoc(collectionProd, product));
function App(){
    return(
        <BrowserRouter>
        <Contexto>
        <Header />
        
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalogo' element={<Catalogo />}/>
        <Route path='/contacto' element={<Contact />}/>
        <Route path='/detail/:id' element={<Itemdetailcontainer />}/>
        <Route path='/catalogo/:category' element={<Catalogo />}/>
        <Route path= '/carrito' element={<Cart />}/>
        </Routes>
        <Footer />
        </Contexto>
        </BrowserRouter>
    
    )
  }
 
  export default App