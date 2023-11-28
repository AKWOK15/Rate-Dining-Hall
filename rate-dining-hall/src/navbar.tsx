import React from 'react';
import './navbar.css'
function NavBar(){
    return(
        <nav className="nav-bar">
            <ul className="nav-menu">
                <li>
                    Rate My Dining Hall
                </li>
                <li>
                    <img className="logo" src="logo.png"/>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;