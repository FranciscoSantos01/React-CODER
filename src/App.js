import Header from "./Header"
import Itemdetailcontainer from "./ItemDetailContainer.js/Itemdetailcontainer"
import Itemlistcontainer from "./Itemlistcontainer"
function App(){
    return(
        <>
        <Header />
        <Itemlistcontainer greetings= "Bienvenidos" />
        <Itemdetailcontainer/>

        </>
    )
  }
 
  export default App