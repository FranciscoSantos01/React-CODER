import Itemcount from "./Itemcount"
function Item({greetings}){
    return(
        <div>
            <h2>{greetings}</h2>
            <Itemcount stock={5} initial={1} onAdd={()=>{}} />
            
        </div>
    )
}

export default Item