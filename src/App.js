import { BrowserRouter, Routes, Route } from "react-router-dom"
import Itemcontact from "./components/Itemcontact"
import Itemhomepage from "./components/Itemhomepage"
import Header from "./Header"
import Itemdetailcontainer from "./ItemDetailContainer.js/Itemdetailcontainer"
import Itemlistcontainer from "./Itemlistcontainer"
function App(){
    return(
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Itemhomepage />}/>
        <Route path='/catalogo' element={<Itemlistcontainer />}/>
        <Route path='/contacto' element={<Itemcontact />}/>
        <Route path='/detail/:id' element={<Itemdetailcontainer />}/>
        <Route path='/catalogo/:category' element={<Itemlistcontainer />}/>
        </Routes>
        
        </BrowserRouter>
    
    )
  }
 
  export default App