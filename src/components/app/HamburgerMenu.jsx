/**
 * Menu hamburger - Header mobile/tablet version
 */

import './HamburgerMenu.css';

import { Link } from "react-router-dom";
// extensión de React Router que añade soporte para enlaces a anclas (#id).
import { HashLink } from "react-router-hash-link";

import Overlay from "../reusables/Overlay";


function HamburgerMenu({isOpen, closeHamburger}) {

    return (
        <Overlay isActive={isOpen} closeChildren={closeHamburger}>

            <div className={`hamburger-menu ${isOpen ? "active" : ""}`}>
                
                <div className="hamburger-head">
                    <Link to="/">
                        <img className="logo"
                        src={`${import.meta.env.BASE_URL}images/logotipo.png`} />
                    </Link>
                        
                    <button id="btn-close" type="button" onClick={closeHamburger}><i className="bi bi-x-lg"></i></button>
                </div>
                

                <div className="hamburger-content">
                    <Link to="/" onClick={closeHamburger}>
                        <div className="hamburger-item">
                            <i className="bi bi-house"></i>
                            <p>Inicio</p>                        
                        </div>
                    </Link>

                    {/* HashLink: Reemplaza a Link cuando el destino incluye un # */}
                    {/* smooth hace un desplazamiento suave */}
                    <HashLink smooth to="/#contents" onClick={closeHamburger}>
                        <div className="hamburger-item">
                            <i className="bi bi-person-lines-fill"></i>
                            <p>Sobre mí</p>
                        </div>
                    </HashLink>

                    <Link to="/portfolio" onClick={closeHamburger}>
                        <div className="hamburger-item">
                            <i className="bi bi-file-earmark-code"></i>
                            <p>Portfolio / Proyectos</p>
                        </div>
                    </Link>
                    
                    <Link to="/experiencia" onClick={closeHamburger}>
                        <div className="hamburger-item">
                            <i className="bi bi-mortarboard"></i>
                            <p>Estudios</p>
                        </div>
                    </Link>

                    <HashLink smooth to="/#contents" onClick={closeHamburger}>
                        <div className="hamburger-item">
                            <i className="bi bi-envelope"></i>
                            <p>Contacto</p>
                        </div>
                    </HashLink>
                </div>


                <div className="hamburger-foot">
                    
                    <a target="_blank" // abrir en nueva pestaña
                    rel="noopener noreferrer" // seguridad solo para links externos
                    href="https://github.com/Desire-e">
                        <i className="bi bi-github"></i>
                    </a>
                    
                    <a target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/desir%C3%A9e-rueda-torres-735bab2b3/">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    
                    <a target="_blank" 
                    rel="noopener noreferrer"
                    href="https://europa.eu/europass/eportfolio/screen/profile?profileId=664b328a0b67c20479eeab25&lang=en">
                        <img src={`${import.meta.env.BASE_URL}images/europass-logo.png`} 
                        className="" alt="perfil europass" width={"100px"}/>
                    </a>

                </div>

            </div>        

        </Overlay>
    );
}
export default HamburgerMenu;