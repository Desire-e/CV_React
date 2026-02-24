/** react-router-dom
es una librería que permite:
- Cambiar de página sin recargar
- Definir rutas
- Redirigir
- Navegar programáticamente
Concede: <Link>, <BrowserRouter>, <Route>
*/  

// 1º instalar react route: npm install react-router-dom
// 2º configurar rutas en App.jsx
// 3º Usar Link ...

import { Link } from "react-router-dom"; // rutas, links
import Nav from 'react-bootstrap/Nav'; // componente bootstrap

function NavBar() {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/">Landing</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} to="/experience">Experiencia</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
