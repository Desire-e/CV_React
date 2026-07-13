
import Navtab from "./Navtab";
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <header>
      <img src={`${import.meta.env.BASE_URL}images/logotipo.png`} 
      className="" alt="Logotipo" width={"170px"}/>
      
      <Navtab />

      <Button variant="outline-light">Contacto</Button>

      <i id="btn-hamburger" className="bi bi-list"></i>

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


