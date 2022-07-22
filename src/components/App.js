import { BrowserRouter, Routes, Route } from "react-router-dom"
import Itemcontact from "./Itemcontact"
import Itemhomepage from "./Itemhomepage"
import Header from "./Header"
import Itemdetailcontainer from "../ItemDetailContainer.js/Itemdetailcontainer"
import Itemlistcontainer from "./Itemlistcontainer"
import { Contexto} from './Cartcontext'
import Cart from "./Cart"
import Footer from "./Footer"
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
        <Route path='/' element={<Itemhomepage />}/>
        <Route path='/catalogo' element={<Itemlistcontainer />}/>
        <Route path='/contacto' element={<Itemcontact />}/>
        <Route path='/detail/:id' element={<Itemdetailcontainer />}/>
        <Route path='/catalogo/:category' element={<Itemlistcontainer />}/>
        <Route path= '/carrito' element={<Cart />}/>
        </Routes>
        <Footer />
        </Contexto>
        </BrowserRouter>
    
    )
  }
 
  export default App