import Cart from "./Carwidget"

function Header (){
    return(
        <header>
            <div className="Title">
                <h1>Africa Clothing</h1>

            </div>
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">contact</a>
                <a href="#">About us</a>
            </div>
            <div className="navbutt">
                <button>Log in</button>
                <Cart />
            </div>
        </header>
    )
}

export default Header