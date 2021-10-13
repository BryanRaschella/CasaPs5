import React from "react";
import "./styles/navbar.scss"


const NavBar = ()=> {
return(
<>
<nav className="nav">
    <div className="menuTitle">
        <h1>Titulo</h1>
        </div>
        <ul className="navUl">
            <li className="navLi"><a href="*" className="a">Inicio</a></li>
            <li className="navLi"><a href="*" className="a">Tienda</a></li>
            <li className="navLi"><a href="*" className="a">Promociones</a></li>
            <li className="navLi"><a href="*" className="a">Contacto</a></li>

        </ul>
</nav>
</>
)
}
export default NavBar