import { BrowserRouter, Routes, Route } from "react-router-dom"
import Itemcontact from "./components/Itemcontact"
import Itemhomepage from "./components/Itemhomepage"
import Header from "./Header"
import Itemdetailcontainer from "./ItemDetailContainer.js/Itemdetailcontainer"
import Itemlistcontainer from "./Itemlistcontainer"
import { Contexto} from './components/Cartcontext'
import Cart from "./components/Cart"
import productos from "./utils/productos"
import { addDoc } from "firebase/firestore"
import { collectionProd } from "./components/Firebase"

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
        </Contexto>
        </BrowserRouter>
    
    )
  }
 
  export default App