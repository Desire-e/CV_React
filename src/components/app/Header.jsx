
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

            {/* Si usara para redirigir a rutas: as={Link} le indica que se renderice como el componente Link
                <Button
                as={Link}
                to="/contacto">  */}
            <Button href="#footer" className="contact-button" variant="outline-light">Contacto</Button>

            
            
            {/* Hamburger icon (mobile ver.) */}

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





// ¿Qué es un componente en React?
// Un componente es una función que devuelve interfaz (HTML en formato JSX).
// Es como crear tu propia etiqueta personalizada.

/*
🛠 Cómo se crea un componente paso a paso
1º) Crear el archivo
- Dentro de src/components/
- Empieza con mayúscula
- Extensión .jsx

2º) Escribir el componente
// forma 1
const Header = () => {
  return (
    <header>
      <h1>Mi CV</h1>
    </header>
  );
};
export default Header;
// forma 2
function Header() {
  return (
    <header>
      <h1>Mi CV</h1>
    </header>
  );
}
export default Header;

const Header = () => {} -- Estás creando una función llamada Header. En React los componentes son funciones.
return (...) -- Un componente siempre debe devolver JSX. JSX parece HTML, pero en realidad es JavaScript.
export default Header -- Permite que puedas usar el componente en otro archivo.

3º) Usarlo en otro archivo
Por ejemplo en App.jsx:
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
    </>
  );
}

Cuando React ve <Header />, ejecuta la función y muestra lo que devuelve.
*/


