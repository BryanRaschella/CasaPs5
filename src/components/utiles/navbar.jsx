import React from "react";
import "../styles/navbar.scss";


const NavBar = ()=> {
return(
<>
<nav className="nav ">
        <ul className="navUl menu">
        <li className="logo"><a href="#"><img className="logo" src="https://android.appsapk.com/wp-content/uploads/2020/03/PS5-logo-revealed-at-CES-2020-1024x556.jpg" alt="logo" /></a></li>
            <li className="navLi item"><a href="*" className="a">Inicio</a></li>
            <li className="navLi item"><a href="*" className="a">Tienda</a></li>
            <li className="navLi item"><a href="*" className="a">Promociones</a></li>
            <li className="navLi item"><a href="*" className="a">Contacto</a></li>
            <li className="toggle"><a href="#"><i className="fas fa-bars"></i></a></li>
        </ul>
</nav>
</>
)
}
export default NavBar