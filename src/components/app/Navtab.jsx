/**
 * react-router-dom
 * Librería que permite:
 * - Cambiar de página sin recargar
 * - Definir rutas
 * - Redirigir
 * - Navegar programáticamente
 * Concede: <Link>, <BrowserRouter>, <Route>
*/  

// 1º instalar react route: npm install react-router-dom
// 2º configurar rutas en App.jsx
// 3º Usar .Link

// componentes bootstrap
import Nav from 'react-bootstrap/Nav'; 

// rutas, links
import { Link } from "react-router-dom"; 

function Navtab() {
  return (
    <div className='navtab-container'>         
        <Nav variant="underline" defaultActiveKey="/">
            <Nav.Item>
                {/* eventKey: prop que usan los componentes de react-bootstrap para identificar 
                de forma única cada ítem dentro de un grupo. */}
                <Nav.Link as={Link} to="/" eventKey="/">Landing</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">Portfolio</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to="/experience" eventKey="/experience">Experiencia</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
  );
}

export default Navtab;