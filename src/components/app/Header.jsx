/**
 * Componente principal de App.jsx
 */

import './Header.css';

import Navtab from "./Navtab";
import Button from 'react-bootstrap/Button';
import HamburgerMenu from "./HamburgerMenu";

import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

    // ---- Hamburger
    
    // Control de estado desde Header
    const [isOpenHamburger, setIsOpenHamburger] = useState(false);

    // Cambiar al estado abierto
    function openHamburger() {
        setIsOpenHamburger(true); 
    };

    // Cambiar al estado cerrado
    function closeHamburger(){
        if(!isOpenHamburger) return;
        setIsOpenHamburger(false);
    }


    
    return (
        <header>
            <Link to="/">
                <img src={`${import.meta.env.BASE_URL}images/logotipo.png`} 
                className="logo" alt="Logotipo"/>
            </Link>
            
            <Navtab />

            <Button href="#footer" className="contact-button" variant="outline-light">Contacto</Button>

                        
            {/* ---------------------------------------- */}
            {/* Hamburger icon (mobile / tablet version) */}

            <button id="btn-hamburger" onClick={openHamburger}>
                <i className="bi bi-list"></i>
            </button>

            <HamburgerMenu 
            isOpen={isOpenHamburger} 
            closeHamburger={closeHamburger} 
            />            

        </header>
    );
}
export default Header;
